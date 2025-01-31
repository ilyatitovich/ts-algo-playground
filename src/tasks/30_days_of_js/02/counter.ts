const createCounter = function (n: number) {
  let count = n;
  return function () {
    return count++;
  };
};

// Test
const counter = createCounter(-2);

export default function counterTask() {
  for (let i = 0; i < 5; i++) {
    console.log(counter());
  }
}

// counterTask();
