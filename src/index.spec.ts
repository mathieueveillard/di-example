type RandomGenerator = () => number;

export function random(min: number, max: number, generator: RandomGenerator): number {
  return min + (max - min) * generator();
}

test("The lowest value possible should be 'min'", function () {
  const generator = () => 0;
  expect(random(1, 10, generator)).toEqual(1);
});

test("The highest value possible should be 'max'", function () {
  const generator = () => 1;
  expect(random(1, 10, generator)).toEqual(10);
});
