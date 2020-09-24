import { generatePassword } from './generate-password';

it('should return number', () => {
  expect(generatePassword()).toBe(3);
});
