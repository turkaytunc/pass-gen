import { generateRandomNumber } from './generate-random-number';

export const generatePassword = (
  length = 0,
  isUpper = false,
  isLower = false,
  isPunctuation = false
) => {
  if (length <= 0) return 0;
  let funcArr = [];
  if (isUpper) funcArr.push(generateUppercase);
  if (isLower) funcArr.push(generateLowercase);
  if (isPunctuation) funcArr.push(generatePunctuation);
  if (funcArr.length <= 0) return 0;

  let result = '';
  for (let i = 0; i < length; i++) {
    const rand = generateRandomNumber(0, funcArr.length - 1);

    result = result.concat(funcArr[rand]());
  }

  console.log(result);
  return result;
};

export const generateUppercase = () => {
  const rand = generateRandomNumber(65, 90);

  return String.fromCharCode(rand);
};
export const generateLowercase = () => {};
export const generatePunctuation = () => {};
