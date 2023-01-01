function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    result.push(toString(i % 3 === 0, i % 5 === 0, i));
  }

  return result;
}

function toString(fizz: boolean, buzz: boolean, fallBack: number): string {
  let result = '';

  if (fizz) {
    result += 'Fizz';
  }

  if (buzz) {
    result += 'Buzz';
  }

  if (!result) {
    result = String(fallBack);
  }

  return result;
}

console.log(fizzBuzz(5));
