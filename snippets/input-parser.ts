/**
 * Input Parser
 *
 * Validates and sanitizes calculator input
 * before passing values into calculation functions.
 */

export function parseNumber(value: string): number | null {
  const trimmed = value.trim();

  if (!trimmed) return null;

  const parsed = parseFloat(trimmed);

  if (isNaN(parsed)) return null;

  return parsed;
}

export function sanitizeInput(value: string) {
  return value.replace(/[^0-9.]/g, "");
}
