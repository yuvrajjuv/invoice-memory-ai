export function increaseConfidence(
  current: number,
  step = 0.1
): number {
  return Math.min(1, current + step);
}

export function decreaseConfidence(
  current: number,
  step = 0.2
): number {
  return Math.max(0, current - step);
}