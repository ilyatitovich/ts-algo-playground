class HashTable<T> {
  private size: number;
  private memory: Array<Array<[string, T]>>; // Массив списков пар [ключ, значение]

  constructor(size: number) {
    if (!size || size <= 0) {
      throw new Error("Размер должен быть положительным числом");
    }

    this.size = size;
    this.memory = new Array<Array<[string, T]>>();
  }

  /**
   * Добавляет или обновляет значение по ключу в хеш-таблице.
   * @param key - Ключ (строка)
   * @param value - Значение (любого типа)
   */
  set(key: string, value: T): void {
    const index = hash(key, this.size);
    const bucket = this.memory[index]; // Берём список по индексу

    // Если свободное место то записываем пару
    if (!bucket) {
      this.memory[index] = [[key, value]];
      return;
    }

    // Ищем, есть ли уже элемент с таким ключом
    const elem = bucket.find((item) => item[0] === key);

    if (elem) {
      elem[1] = value; // Если есть, обновляем значение
    } else {
      // Обратка коллизии методом цепочек
      bucket.push([key, value]); // Иначе добавляем новую пару
    }
  }

  /**
   * Возвращает значение по ключу или undefined, если ключ не найден.
   * @param key - Ключ (строка)
   * @returns Значение или undefined
   */
  get(key: string): T | undefined {
    const index = hash(key, this.size);
    const pair = this.memory[index].find((item) => item[0] === key);
    return pair ? pair[1] : undefined;
  }

  /**
   * Удаляет пару ключ-значение из хеш-таблицы.
   * @param key - Ключ (строка)
   */
  remove(key: string): void {
    const index = hash(key, this.size);
    const bucket = this.memory[index];

    // Находим индекс элемента в списке
    const itemIndex = bucket.findIndex((item) => item[0] === key);
    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1); // Удаляем элемент
    }
  }
}

/**
 * Простая хеш-функция для строк.
 * @param key - Ключ (строка)
 * @param size - Размер хеш-таблицы
 * @returns Индекс в массиве
 */
function hash(key: string, size: number): number {
  const MAX_LENGTH = 200;
  const start =
    key.length > MAX_LENGTH ? Math.floor((key.length % MAX_LENGTH) / 2) : 0;
  const end = Math.min(key.length, MAX_LENGTH);

  let total = 0;
  for (let i = 0; i < end; i++) {
    total = (total + key.charCodeAt(start + i) * (i + 1)) % size;
  }
  return total;
}

// Пример использования
const table = new HashTable<number>(10);
table.set("apple", 100);
table.set("orange", 200);
console.log(table.get("apple")); // 100
table.remove("apple");
console.log(table.get("apple")); // undefined
