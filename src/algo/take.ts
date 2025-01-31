/*
take

Напишите функцию, которая создаёт часть массива с n элементами,
взятыми с начала. Необходимо валидировать входные значения.
В случае ошибки — выбросьте исключение ValidationError: bad value.
Сделайте реализацию через класс. Ошибка в консоли должна выглядеть
в точности как в примере.

*/

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function take<T>(list: T[], num: number = 1): T[] {
  // Валидация входных данных
  if (
    !Array.isArray(list) ||
    typeof num !== "number" ||
    num < 0 ||
    !Number.isInteger(num)
  ) {
    throw new ValidationError("bad value");
  }

  // Возвращаем первые `num` элементов массива
  return list.slice(0, num);
}

export default take;

/*
Объяснение:

1. Класс ValidationError:
  - Наследуется от встроенного класса Error.
  - Устанавливает имя ошибки (name) как "ValidationError", чтобы в консоли отображалось корректное имя ошибки.

2. Функция take:
  - Принимает два аргумента: массив list и число num (по умолчанию 1).
  - Проверяет, что list является массивом, а num — неотрицательным целым числом. Если проверка не проходит, выбрасывается исключение ValidationError.
  - Использует метод slice для возврата первых num элементов массива.

3. Примеры использования:
  - Корректные случаи обрабатываются как ожидается.
  - Некорректные случаи приводят к выбрасыванию исключения ValidationError.

*/
