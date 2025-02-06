/*
Подотрезок с суммой X

Дан массив целых чисел. Нужно найти и вернуть количество подотрезков (непрерывных подпоследовательностей) с заданной суммой k. Если это невозможно, функция должна вернуть 0.



Оптимальное решение (O(n)) – через Map

Вместо того чтобы проверять все подотрезки (O(n²)), можно использовать разницу префиксных сумм:

Идея:
* Префиксная сумма sum[i] – это сумма всех элементов nums[0] до nums[i].
* Если sum[j] - sum[i] = k, значит, подотрезок nums[i+1:j] даёт сумму k.
* Используем Map, чтобы отслеживать, сколько раз встречалась sum[i].

*/

function subarraySum(nums: number[], k: number) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1); // Нужно для случая, если сам `sum == k`

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 1], 3)); // 2
console.log(subarraySum([1, 2, 5, 3], 3)); // 2
console.log(subarraySum([10, 5, 6, 7, 8, 7], 15)); // 3
