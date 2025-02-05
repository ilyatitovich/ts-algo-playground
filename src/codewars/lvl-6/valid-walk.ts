// https://www.codewars.com/kata/54da539698b8a2ad76000228

export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }

  let x = 0; // Горизонтальная координата (восток/запад)
  let y = 0; // Вертикальная координата (север/юг)

  for (const dir of walk) {
    if (dir === "n") y++; // Движение на север увеличивает y
    if (dir === "s") y--; // Движение на юг уменьшает y
    if (dir === "e") x++; // Движение на восток увеличивает x
    if (dir === "w") x--; // Движение на запад уменьшает x
  }

  return x === 0 && y === 0; // Возвращаемся ли мы в точку (0,0)
}

console.log(isValidWalk(["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"])); // false
