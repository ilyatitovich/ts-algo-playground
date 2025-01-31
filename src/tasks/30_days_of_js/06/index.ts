/*
Given an integer array arr and a filtering
function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements
from the arr for which the expression fn(arr[i], i)
evaluates to a truthy value. A truthy value is a value
where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

type Fn = (n: number, i: number) => boolean;

function filter(arr: number[], fn: Fn): number[] {
  const len: number = arr.length;
  const filteredArr: number[] = [];

  for (let i = 0; i < len; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
