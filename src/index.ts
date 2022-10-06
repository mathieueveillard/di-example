type RandomGenerator = () => number;

export const random = (min: number, max: number, generator: RandomGenerator): number => {
  return min + (max - min) * generator();
};

const n = random(1, 10, Math.random);
