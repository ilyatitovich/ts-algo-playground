type ReduceFn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: ReduceFn, init: number): number {
  const len: number = nums.length;

  for (let i = 0; i < len; i++) {
    init = fn(init, nums[i]);
  }

  return init;
}

// const nums = [1, 2, 3, 4];
// const fn: ReduceFn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;

// console.log(reduce(nums, fn, init));
