// https://www.codewars.com/kata/54e6533c92449cc251001667

export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  // if (iterable.length === 0) {
  //   return [];
  // }
  // let result: (string | number)[] = [iterable[0]];
  // let resultPointer: number = 0;
  // let pointer: number = 1;
  // while (pointer !== iterable.length) {
  //   if (iterable[pointer] !== result[resultPointer]) {
  //     result.push(iterable[pointer]);
  //     resultPointer++;
  //   }
  //   pointer++;
  // }
  // return result;
  return [...iterable].filter((x, i) => x != iterable[i - 1]);
}

uniqueInOrder("AAAABBBCCDAABBB");
