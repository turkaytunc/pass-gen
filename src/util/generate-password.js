import { generateRandomNumber } from './generate-random-number';

export const generatePassword = (
  length = 0,
  isUpper = false,
  isLower = false,
  isPunctuation = false
) => {
  if (length <= 0) return 0;
  if ((isLower || isUpper || isPunctuation) === false) return '';
  let funcArr = [];
  if (isUpper) funcArr.push(generateUppercase);
  if (isLower) funcArr.push(generateLowercase);
  if (isPunctuation) funcArr.push(generatePunctuation);

  let result = '';
  for (let i = 0; i < length; i++) {
    const rand = generateRandomNumber(0, funcArr.length);
    result = result.concat(funcArr[rand]());
  }

  return result;
};

const generateUppercase = () => {
  const rand = generateRandomNumber(65, 90);

  return String.fromCharCode(rand);
};
const generateLowercase = () => {
  const rand = generateRandomNumber(97, 122);

  return String.fromCharCode(rand);
};
const generatePunctuation = () => {
  const puncString = '$#().,<>?=+*&!';
  const rand = generateRandomNumber(0, puncString.length - 1);
  return puncString[rand];
};
