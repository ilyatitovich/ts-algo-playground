# Алгоритм Хаффмана

Алгоритм Хаффмана — это метод сжатия данных без потерь, который используется для минимизации размера представления информации. Он применяется в различных областях, таких как сжатие текстов, изображений и аудио.

## Как работает алгоритм Хаффмана?

Алгоритм строит префиксное кодовое дерево (дерево Хаффмана), в котором символы, встречающиеся чаще, кодируются более короткими последовательностями битов, а реже встречающиеся — более длинными.

### Этапы работы алгоритма

### 1. Подсчёт частоты символов

Сначала определяется, сколько раз встречается каждый символ во входной строке. Например, возьмём строку:

```
hello world
```

Подсчитаем частоту каждого символа:

```
h: 1
е: 1
l: 3
o: 2
w: 1
r: 1
d: 1
```

### 2. Создание приоритетной очереди

Каждый символ представляется узлом дерева, а его частота — весом узла. Эти узлы добавляются в приоритетную очередь, где узлы с меньшей частотой имеют более высокий приоритет.

### 3. Построение дерева Хаффмана

- Достаются два узла с наименьшей частотой.
- Создаётся новый узел, который становится их родителем. Его вес — сумма весов дочерних узлов.
- Новый узел добавляется обратно в очередь.
- Процесс повторяется, пока не останется один узел — корень дерева.

Пример дерева для строки "hello world":

```
         (*)
        /   \
      (*)    l (3)
     /   \
    o (2)  (*)
          /   \
        h (1)  e (1)
```

### 4. Назначение кодов Хаффмана

Дерево обходится от корня к листьям, назначая "0" для левого перехода и "1" для правого:

```
h = 110
е = 111
l = 0
o = 10
w = 1010
r = 1011
d = 100
```

### 5. Кодирование строки

Исходная строка заменяется её двоичным представлением:

```
hello world → 110 111 0 0 10 1010 10 1011 0 100
```

### 6. Декодирование строки

Для декодирования строки используется построенное дерево: двоичный код читается и преобразуется обратно в символы.

## Применение алгоритма Хаффмана

- **Сжатие текстов** (например, ZIP, GZIP, JPEG, MP3)
- **Сжатие изображений** (например, PNG)
- **Сжатие звука** (например, аудиоформат MP3)
- **Сетевые протоколы** (например, HTTP/2 использует его в заголовках)

## Преимущества и недостатки

**Преимущества:**

- Позволяет значительно уменьшить размер файла без потерь качества
- Прост в реализации
- Эффективен для текстов с повторяющимися символами

**Недостатки:**

- Требует хранения таблицы кодов
- Не всегда даёт оптимальное сжатие (например, по сравнению с алгоритмом LZW)
- Кодирование требует двух проходов: сначала анализ символов, затем кодирование

## Заключение

Алгоритм Хаффмана — один из самых эффективных и широко используемых методов сжатия данных. Он обеспечивает хорошее сжатие при малых затратах ресурсов, что делает его полезным в разных областях IT.
