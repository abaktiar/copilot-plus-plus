import { LoggingService } from './loggingService';

/**
 * Service for sanitizing and preprocessing JSON responses from LLMs
 */
export class JsonSanitizationService {
  private static _instance: JsonSanitizationService;
  private _logger: LoggingService;

  private constructor() {
    this._logger = LoggingService.getInstance();
  }

  /**
   * Get the singleton instance of JsonSanitizationService
   */
  public static getInstance(): JsonSanitizationService {
    if (!JsonSanitizationService._instance) {
      JsonSanitizationService._instance = new JsonSanitizationService();
    }
    return JsonSanitizationService._instance;
  }

  /**
   * Preprocess JSON with code blocks to handle backticks properly
   * @param jsonString The JSON string to preprocess
   * @returns Preprocessed JSON string
   */
  public preprocessJsonWithCodeBlocks(jsonString: string): string {
    // First, handle triple backtick code blocks (```language ... ```)
    let processed = jsonString.replace(
      /("(?:suggestedCode|code|codeSnippet|lineContext)"\s*:\s*)```(?:typescript|javascript|java|python|csharp|cpp|go|rust|html|css|json|sql|bash|shell|powershell|yaml|xml|markdown|text)?([\s\S]*?)```/g,
      (match, prefix, codeContent) => {
        // Escape any backslashes first (to avoid double-escaping)
        const escapedCode = codeContent
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/\t/g, '\\t');

        // Return the property with properly escaped JSON string
        return `${prefix}"${escapedCode}"`;
      }
    );

    // Then handle single backtick code blocks
    processed = processed.replace(
      /("(?:suggestedCode|code|codeSnippet|lineContext)"\s*:\s*)`([\s\S]*?)`/g,
      (match, prefix, codeContent) => {
        // Escape any backslashes first (to avoid double-escaping)
        const escapedCode = codeContent
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/\t/g, '\\t');

        // Return the property with properly escaped JSON string
        return `${prefix}"${escapedCode}"`;
      }
    );

    // Handle nested objects with backticks
    processed = this.handleNestedBackticks(processed);

    return processed;
  }

  /**
   * Handle nested backticks in JSON objects
   * @param jsonString The JSON string to process
   * @returns Processed JSON string
   */
  private handleNestedBackticks(jsonString: string): string {
    // This is a more aggressive approach for when the JSON is malformed with backticks
    // Look for patterns like "property": { ... `code` ... }
    return jsonString.replace(/(`)([\s\S]*?)(`)/g, (match, startTick, content, endTick) => {
      // Only replace if not already part of a properly formatted JSON string
      // Check if we're inside a property value that should be a string
      const escapedContent = content
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');

      return `"${escapedContent}"`;
    });
  }

  /**
   * Apply aggressive JSON sanitization for malformed responses
   * @param jsonString The JSON string to sanitize
   * @returns Sanitized JSON string
   */
  public sanitizeJsonString(jsonString: string): string {
    // Replace all backtick-enclosed code blocks with properly escaped JSON strings
    let sanitized = jsonString;

    // First pass: handle triple backtick code blocks with language specifiers
    sanitized = sanitized.replace(
      /:\s*```(?:typescript|javascript|java|python|csharp|cpp|go|rust|html|css|json|sql|bash|shell|powershell|yaml|xml|markdown|text)?([\s\S]*?)```/g,
      (match, content) => {
        const escaped = JSON.stringify(content);
        return ': ' + escaped;
      }
    );

    // Second pass: handle property values with backticks
    sanitized = sanitized.replace(/:\s*`([^`]*)`/g, (match, content) => {
      const escaped = JSON.stringify(content);
      return ': ' + escaped;
    });

    // Third pass: handle any remaining backticks that might be causing issues
    sanitized = sanitized.replace(/`/g, '"');

    // Fourth pass: fix double quotes that might have been messed up
    sanitized = sanitized.replace(/""/g, '"');

    // Fifth pass: handle unescaped newlines in strings
    sanitized = sanitized.replace(/(".*?)[\n\r]+(.*?")/g, (match, before, after) => {
      return before + '\\n' + after;
    });

    // Sixth pass: try to fix malformed JSON structure
    try {
      JSON.parse(sanitized);
      return sanitized;
    } catch (error) {
      // If we still have JSON errors, try a more aggressive approach
      this.log('Attempting final JSON structure repair');

      // Look for common JSON structure issues
      sanitized = sanitized.replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
      sanitized = sanitized.replace(/([{,])\s*([^"{\s][^:]*?):/g, '$1"$2":'); // Add quotes to unquoted property names

      return sanitized;
    }
  }

  /**
   * Try to extract valid JSON from a response that might contain non-JSON content
   * @param responseContent The raw response content
   * @returns The extracted JSON string or the original content if no JSON found
   */
  public extractJsonFromResponse(responseContent: string): string {
    // Try to find a JSON object in the response
    const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
    return jsonMatch ? jsonMatch[0] : responseContent;
  }

  /**
   * Log message to the output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'JsonSanitizationService');
  }

  /**
   * Log error to the output channel
   */
  private logError(error: string | Error): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    this._logger.logError(errorMessage, error, 'JsonSanitizationService');
  }
}
