import { generatePassword } from './generate-password';

it('Should return zero', () => {
  expect(generatePassword()).toBe(0);
});

it('Should return zero', () => {
  expect(generatePassword(3)).toBe(0);
});

it('Should return zero', () => {
  expect(generatePassword(5)).toBe(0);
});

it('Should return zero', () => {
  expect(generatePassword(3, true)).toHaveLength(1);
});
