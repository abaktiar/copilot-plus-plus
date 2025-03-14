import * as vscode from 'vscode';

export interface BaseConfig {
  defaultTargetBranch: string;
}

export interface CommitMessageConfig {
  languageModel: string;
  commitStyle: string;
  includeTicketNumber: boolean;
  ticketPattern: string;
}

export interface PrDescriptionConfig {
  style: string;
  includeTechnicalDetails: boolean;
  groupCommitsByType: boolean;
}

export interface PrReviewConfig {
  includeSecurity: boolean;
  includeCodeStyle: boolean;
  includePerformance: boolean;
  includeBreakingChanges: boolean;
  enableInlineLinks: boolean;
  severityLevels: string[];
  includeLogicalErrors: boolean;
  includeTestingGaps: boolean;
}

/**
 * Service to manage extension configuration
 */
export class ConfigService {
  /**
   * Get the full configuration for commit message generation
   */
  public static getCommitMessageConfig(): CommitMessageConfig {
    const config = vscode.workspace.getConfiguration('copilotPlusPlus');
    return {
      languageModel: config.get<string>('languageModel') || 'gpt-4o',
      commitStyle: config.get<string>('commitStyle') || 'conventional',
      includeTicketNumber: config.get<boolean>('includeTicketNumber') ?? true,
      ticketPattern: config.get<string>('ticketPattern') || '(?:^|\\/)([A-Z]+-\\d+)(?:\\/|$|[-_])',
    };
  }

  /**
   * Get the configuration for PR description generation
   */
  public static getPrDescriptionConfig(): PrDescriptionConfig {
    const config = vscode.workspace.getConfiguration('copilotPlusPlus');
    return {
      style: config.get<string>('prDescriptionStyle') || 'detailed',
      includeTechnicalDetails: config.get<boolean>('includeTechnicalDetails') ?? true,
      groupCommitsByType: config.get<boolean>('groupCommitsByType') ?? true,
    };
  }

  /**
   * Get the configuration for PR review assistance
   */
  public static getPrReviewConfig(): PrReviewConfig {
    const config = vscode.workspace.getConfiguration('copilotPlusPlus');
    return {
      includeSecurity: config.get<boolean>('prReview.includeSecurity') ?? true,
      includeCodeStyle: config.get<boolean>('prReview.includeCodeStyle') ?? true,
      includePerformance: config.get<boolean>('prReview.includePerformance') ?? true,
      includeBreakingChanges: config.get<boolean>('prReview.includeBreakingChanges') ?? true,
      enableInlineLinks: config.get<boolean>('prReview.enableInlineLinks') ?? true,
      severityLevels: config.get<string[]>('prReview.severityLevels') || ['Critical', 'High', 'Medium', 'Low'],
      includeLogicalErrors: config.get<boolean>('prReview.includeLogicalErrors') ?? true,
      includeTestingGaps: config.get<boolean>('prReview.includeTestingGaps') ?? true,
    };
  }

  /**
   * Get the configured language model family
   */
  public static getLanguageModelFamily(): string {
    const config = vscode.workspace.getConfiguration('copilotPlusPlus');
    return config.get<string>('languageModel') || 'copilot';
  }

  /**
   * Retrieves the base configuration for Copilot++.
   *
   * This method accesses the VS Code workspace configuration to get user-defined settings for Copilot++.
   * If certain configuration values are not set, it provides default values.
   *
   * @returns {BaseConfig} An object containing the base configuration values:
   *  - defaultTargetBranch: The default branch to target for operations (defaults to empty string if not set)
   */
  public static getBaseConfig(): BaseConfig {
    const config = vscode.workspace.getConfiguration('copilotPlusPlus');
    return {
      defaultTargetBranch: config.get<string>('defaultTargetBranch') || '',
    };
  }

  /**
   * Register configuration change listener
   * @param callback Function to call when configuration changes
   * @returns Disposable to unregister the listener
   */
  public static onConfigChange(callback: () => void): vscode.Disposable {
    return vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('copilotPlusPlus')) {
        callback();
      }
    });
  }
}