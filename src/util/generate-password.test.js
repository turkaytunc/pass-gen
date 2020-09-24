import { generatePassword } from './generate-password';

it('Should return empty string', () => {
  expect(generatePassword()).toBe('');
});

it('Should return empty string', () => {
  expect(generatePassword(3)).toBe('');
});

it('Should return empty string', () => {
  expect(generatePassword(5)).toBe('');
});

it('Length should be zero', () => {
  expect(generatePassword(6)).toHaveLength(0);
});

it('Should contain characters', () => {
  expect(generatePassword(5, true, true, true)).toMatch(/\w+/);
});
