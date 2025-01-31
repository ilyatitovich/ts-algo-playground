/*
Полифил для bind
Представьте, что в браузере у функций нет метода bind.
Реализуйте его поведение на основе других методов.
*/

/**
var F = function() {
  console.log('foo is', this.foo);
}
var F1 = F.bind({ foo: 'bar' })

F()               // foo is undefined
F1()              // foo is bar

var f = new F()   // foo is undefined
var f1 = new F1() // foo is bar

console.log(f instanceof F)    // true
console.log(f1 instanceof F)   // false
*/

// не удаляйте следующую строчку, без нее проект не соберётся
// eslint-disable-next-line
// eslint-disable-next-line
Function.prototype.bind = function (ctx: unknown, ...boundArgs: unknown[]) {
  const originalFunc = this; // Сохраняем исходную функцию

  if (typeof originalFunc !== "function") {
    throw new TypeError("Bind must be called on a function");
  }

  // Возвращаем новую функцию
  const boundFunction = (...args: unknown[]) => {
    // Определяем, вызвана ли функция как конструктор (с `new`)
    const isConstructorCall = new.target !== undefined;

    // Если функция вызвана как конструктор, используем новый контекст
    // Иначе используем переданный контекст `ctx`
    const thisContext = isConstructorCall ? this : ctx;

    // Вызываем исходную функцию с правильным контекстом и аргументами
    return originalFunc.apply(thisContext, [...boundArgs, ...args]);
  };

  // Сохраняем прототип исходной функции для корректной работы с `instanceof`
  if (originalFunc.prototype) {
    boundFunction.prototype = Object.create(originalFunc.prototype);
  }

  return boundFunction;
};

export default Function.prototype.bind;
