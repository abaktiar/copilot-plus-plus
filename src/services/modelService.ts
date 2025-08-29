import * as vscode from 'vscode';

// Minimal shape expected by webviews for a model option
export interface WebviewModelConfig {
  id: string; // model family identifier used with vscode.lm
  name: string; // human-readable label (dynamic, not hardcoded)
  family?: string;
  contextWindow?: number;
  maxTokens?: number;
  supportsVision?: boolean;
  usageTag?: string; // e.g., "write 1x" if available
}

/**
 * Discover available GitHub Copilot chat models via VS Code LM API.
 * Returns unique families only and maps to the webview-friendly format.
 */
export async function getAvailableCopilotModels(): Promise<WebviewModelConfig[]> {
  try {
    // Ask for all Copilot-provided chat models
    const models = await vscode.lm.selectChatModels({ vendor: 'copilot' });

    // Deduplicate by family; prefer a deterministic order
    const seen = new Set<string>();
    const result: WebviewModelConfig[] = [];
    for (const model of models) {
      const anyModel = model as any;
      const family = anyModel?.family || anyModel?.model || anyModel?.id || '';
      if (!family || seen.has(family)) continue;
      seen.add(family);

      // Prefer dynamic display name if provided by API
      const dynamicName: string | undefined = anyModel?.displayName || anyModel?.name;
      const readable = dynamicName || toReadableFromId(family);

      // Extract optional metadata when available without assuming schema
      const contextWindow =
        anyModel?.maxInputTokens || anyModel?.contextWindow || anyModel?.limits?.maxInputTokens;
      const supportsVision = Boolean(
        anyModel?.capabilities?.vision || anyModel?.features?.vision || anyModel?.vision
      );
      const usageTag = deriveUsageTag(anyModel);

      result.push({
        id: family,
        name: readable,
        family,
        contextWindow: typeof contextWindow === 'number' ? contextWindow : undefined,
        supportsVision,
        usageTag,
      });
    }

    // Sort for stable UI: group by family alphabetically, minis after base
    result.sort((a, b) => a.id.localeCompare(b.id));
    return result;
  } catch (err) {
    console.error('Error discovering Copilot models via VS Code LM API:', err);
    return [];
  }
}

/**
 * Pick a default model from config if available, otherwise first available.
 */
export function chooseDefaultModel(
  available: WebviewModelConfig[],
  configuredFamily?: string
): string | undefined {
  if (configuredFamily && available.some(m => m.id === configuredFamily)) {
    return configuredFamily;
  }
  return available[0]?.id;
}

function toReadableFromId(id: string): string {
  // Convert id like 'gpt-4o-mini' or 'claude-3.5-sonnet' to readable title case without hardcoding maps
  if (!id) return id;
  // Keep dots within tokens (e.g., 3.5) intact; split on '-'
  const tokens = id.split('-');
  const cap = (t: string) => {
    if (!t) return t;
    // Preserve casing for known prefixes
    if (t.toLowerCase() === 'gpt') return 'GPT';
    if (t.toLowerCase() === 'o1') return 'o1';
    if (/^\d+(?:\.\d+)?$/.test(t)) return t; // numbers like 4, 3.5
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
  return tokens.map(cap).join(' ');
}

function deriveUsageTag(anyModel: any): string | undefined {
  // Try to surface an indicative usage tag if API exposes something like write multipliers or tier
  // We avoid hardcoding and only display when we can detect a value.
  const candidates: Array<string | number | undefined> = [
    anyModel?.capabilities?.writeMultiplier,
    anyModel?.limits?.writeMultiplier,
    anyModel?.tier,
    anyModel?.plan,
    anyModel?.quota?.writeMultiplier,
  ];
  for (const v of candidates) {
    if (v === undefined || v === null) continue;
    if (typeof v === 'number') return `write ${v}x`;
    const m = String(v).match(/(\d+)x/);
    if (m) return `write ${m[1]}x`;
    // fallback to showing the value as-is if it looks short and meaningful
    const s = String(v).trim();
    if (s && s.length <= 10 && /^(free|pro|team|enterprise|\d+x)$/i.test(s)) return s;
  }
  return undefined;
}
