/**
 * Calculator State Management
 *
 * Manages calculation history and result state
 * used across CalcFlow modules.
 */

export interface CalculationResult {
  input: string;
  result: string;
  timestamp: number;
}

export function createHistoryEntry(
  input: string,
  result: string
): CalculationResult {
  return {
    input,
    result,
    timestamp: Date.now(),
  };
}

export function sortHistory(entries: CalculationResult[]) {
  return entries.sort((a, b) => b.timestamp - a.timestamp);
}
