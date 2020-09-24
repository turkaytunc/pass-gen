import { generateRandomNumber } from './generate-random-number';

it('Should return zero', () => {
  expect(generateRandomNumber()).toBe(0);
});

it('Should be greater than 0', () => {
  expect(generateRandomNumber(0, 1)).toBeGreaterThanOrEqual(0);
});

it('Should be less than 5', () => {
  expect(generateRandomNumber(4, 5)).toBeLessThan(5);
});

it('Should return zero', () => {
  expect(generateRandomNumber(undefined, undefined)).toBe(0);
});
