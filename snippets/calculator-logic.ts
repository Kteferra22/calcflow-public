/**
 * Interest Calculation Engine
 *
 * Core calculation logic used by CalcFlow's
 * simple interest calculator.
 *
 * This module performs deterministic financial
 * calculations independent from the UI layer.
 */

export function calculateSimpleInterest(
  principal: number,
  rate: number,
  years: number
) {
  const interest = (principal * rate * years) / 100;
  const total = principal + interest;

  return {
    interest,
    total,
  };
}

export function getMaturityYear(currentYear: number, years: number) {
  return currentYear + years;
}
