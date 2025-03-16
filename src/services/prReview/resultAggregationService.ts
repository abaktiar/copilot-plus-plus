import * as vscode from 'vscode';
import { LoggingService } from '../loggingService';
import { CopilotService } from '../copilotService';
import { ConfigService } from '../configService';
import { PromptService } from '../promptService';

/**
 * Service responsible for aggregating results from multiple file group reviews
 */
export class ResultAggregationService {
  private _logger: LoggingService;
  private _copilotService: CopilotService;

  constructor() {
    this._logger = LoggingService.getInstance();
    this._copilotService = new CopilotService();
  }

  /**
   * Aggregate results from multiple file group reviews
   * @param results Array of individual review results
   * @param prContext Original PR context
   * @param modelFamily Optional language model family to use
   * @returns Aggregated review result
   */
  public async aggregateResults(results: any[], prContext: any, modelFamily?: string): Promise<any> {
    this.log(`Aggregating results from ${results.length} file group reviews`);

    if (results.length === 0) {
      throw new Error('No results to aggregate');
    }

    // If only one result, return it directly
    if (results.length === 1) {
      this.log('Only one result, returning directly');
      return results[0];
    }

    try {
      // Merge issues from all results
      const mergedIssues = this.mergeIssues(results);

      // Generate overall summary
      const summary = await this.generateOverallSummary(results, prContext, modelFamily);

      // Combine into final result
      const aggregatedResult = {
        summary,
        issues: mergedIssues,
      };

      this.log('Successfully aggregated results');
      return aggregatedResult;
    } catch (error) {
      this.logError('Error aggregating results', error);
      throw error;
    }
  }

  /**
   * Merge issues from multiple results, removing duplicates
   * @param results Array of individual review results
   * @returns Merged array of issues
   */
  private mergeIssues(results: any[]): any[] {
    // Collect all issues
    const allIssues = results.flatMap((result) => result.issues || []);

    // Create a map to track unique issues
    const uniqueIssues = new Map();

    // Process each issue
    allIssues.forEach((issue) => {
      // Create a key based on file path, description, and severity
      const key = `${issue.filePath}:${issue.severity}:${issue.description}`;

      // If this is a new unique issue or has more details than existing one, add it
      if (
        !uniqueIssues.has(key) ||
        (issue.lineNumber && !uniqueIssues.get(key).lineNumber) ||
        (issue.suggestion && !uniqueIssues.get(key).suggestion)
      ) {
        uniqueIssues.set(key, issue);
      }
    });

    // Convert map back to array
    return Array.from(uniqueIssues.values());
  }

  /**
   * Generate an overall summary based on all results
   * @param results Array of individual review results
   * @param prContext Original PR context
   * @param modelFamily Optional language model family to use
   * @returns Overall summary
   */
  private async generateOverallSummary(results: any[], prContext: any, modelFamily?: string): Promise<any> {
    this.log('Generating overall summary from individual results');

    try {
      // Extract summaries from each result
      const summaries = results.map((result) => result.summary);

      // Get directory structure for context
      const directoryStructure = this.extractDirectoryStructure(prContext);

      // Create a prompt for the summary generation
      const systemContent = `You are synthesizing the results of multiple file-specific code reviews into an overall PR summary.

The PR includes these directories with changes:
${directoryStructure}

Your task is to analyze the individual summaries and create a comprehensive overview that captures the most important points across all reviews.`;

      // Format summaries for the prompt
      const formattedSummaries = summaries
        .map((summary, index) => {
          return `Summary ${index + 1}:
Assessment: ${summary.assessment}
Strengths: ${JSON.stringify(summary.strengths)}
Critical Issues: ${JSON.stringify(summary.criticalIssues)}
Recommendations: ${JSON.stringify(summary.recommendations)}`;
        })
        .join('\n\n');

      // Create the user message content
      const userContent = `Here are the key findings from each file group:
${formattedSummaries}

Provide a comprehensive PR review summary following this format:
{
  "summary": {
    "assessment": "Overall assessment of the code changes across all files",
    "strengths": ["Key strength 1", "Key strength 2"],
    "criticalIssues": ["Most critical issue 1", "Most critical issue 2"],
    "recommendations": ["Overall recommendation 1", "Overall recommendation 2"]
  }
}

Consider patterns across files and prioritize the most impactful issues in your summary.`;

      // Use provided model family or fall back to config
      const selectedModelFamily = modelFamily || ConfigService.getLanguageModelFamily();

      // Select the language model
      const [model] = await vscode.lm.selectChatModels({
        vendor: 'copilot',
        family: selectedModelFamily,
      });

      if (!model) {
        throw new Error(`No suitable language model found for: ${selectedModelFamily}`);
      }

      // Create messages using the static methods
      const messages = [
        vscode.LanguageModelChatMessage.User(systemContent),
        vscode.LanguageModelChatMessage.User(userContent),
      ];

      // Send the request to the language model
      const response = await model.sendRequest(messages);

      // Collect the response
      let responseContent = '';
      for await (const fragment of response.text) {
        responseContent += fragment;
      }

      // Parse the response as JSON
      try {
        const parsedResponse = JSON.parse(responseContent);
        return parsedResponse.summary;
      } catch (parseError) {
        this.logError('Error parsing summary response', parseError);

        // Fallback: use the first result's summary
        this.log('Falling back to first result summary');
        return results[0].summary;
      }
    } catch (error) {
      this.logError('Error generating overall summary', error);

      // Fallback: use the first result's summary
      this.log('Falling back to first result summary due to error');
      return results[0].summary;
    }
  }

  /**
   * Extract directory structure from PR context
   * @param prContext PR context
   * @returns Formatted directory structure
   */
  private extractDirectoryStructure(prContext: any): string {
    if (!prContext.files || !Array.isArray(prContext.files)) {
      return 'No directory structure available';
    }

    // Extract directories from file paths
    const directories = new Set<string>();
    prContext.files.forEach((file: any) => {
      if (file.file) {
        const filePath = file.file;
        const directory = filePath.substring(0, filePath.lastIndexOf('/'));
        if (directory) {
          directories.add(directory);
        }
      }
    });

    // Format directory structure
    return Array.from(directories).sort().join('\n');
  }

  /**
   * Log message to output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'ResultAggregationService');
  }

  /**
   * Log error to output channel
   */
  private logError(message: string, error?: any): void {
    this._logger.logError(message, error, 'ResultAggregationService');
  }
}
