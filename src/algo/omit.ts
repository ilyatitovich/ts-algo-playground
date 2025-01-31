/*
omit
Реализуйте функцию, которая исключает из объекта указанные свойства.
*/

function omit<T extends object>(obj: T, fields: (keyof T)[]): Omit<T, keyof T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !fields.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result as Omit<T, keyof T>;
}

export default omit;

/*
Объяснение:

1. Типизация:
  - T extends object: Ограничиваем тип T объектами.
  - fields: (keyof T)[]: Массив ключей, которые нужно исключить из объекта.
  - Omit<T, keyof T>: Возвращаемый тип — объект без указанных ключей.

2.Создание нового объекта:
  - Мы создаем пустой объект result типа Partial<T>, который будет содержать только те свойства, которые не указаны в fields.

3. Итерация по свойствам объекта:
  - Мы проходим по всем ключам исходного объекта (for (const key in obj)).
  - Если ключ не находится в массиве fields, мы добавляем его в новый объект result.

4. Возврат результата:
`- Возвращаем result, приведенный к типу Omit<T, keyof T>.

*/
