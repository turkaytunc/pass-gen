import { generatePassword } from './generate-password';

it('Should return zero', () => {
  expect(generatePassword()).toBe(0);
});

it('Should return zero', () => {
  expect(generatePassword(3)).toBe('');
});

it('Should return zero', () => {
  expect(generatePassword(5)).toBe('');
});

it('Length should be zero', () => {
  expect(generatePassword(6)).toHaveLength(0);
});
