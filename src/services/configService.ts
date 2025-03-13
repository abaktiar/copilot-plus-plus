import * as vscode from 'vscode';

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
            ticketPattern: config.get<string>('ticketPattern') || '(?:^|\\/)([A-Z]+-\\d+)(?:\\/|$|[-_])'
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
            groupCommitsByType: config.get<boolean>('groupCommitsByType') ?? true
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
     * Register configuration change listener
     * @param callback Function to call when configuration changes
     * @returns Disposable to unregister the listener
     */
    public static onConfigChange(callback: () => void): vscode.Disposable {
        return vscode.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('copilotPlusPlus')) {
                callback();
            }
        });
    }
}