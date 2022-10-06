import { random } from ".";

test("The lowest value possible should be 'min'", () => {
  const generator = () => 0;
  expect(random(1, 10, generator)).toEqual(1);
});

test("The highest value possible should be 'max'", () => {
  const generator = () => 1;
  expect(random(1, 10, generator)).toEqual(10);
});
