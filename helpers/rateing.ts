export function getStarCount(condition: string): number {
  const match = condition.match(/\d+/);
  return match ? Number(match[0]) : 0;
}
