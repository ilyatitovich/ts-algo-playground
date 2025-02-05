// https://www.codewars.com/kata/550554fd08b86f84fe000a58/

export function inArray(a1: string[], a2: string[]): string[] {
  return a1.filter((el) => a2.some((str) => str.includes(el))).sort();
}

inArray(
  ["arp", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
