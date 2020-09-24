import React from 'react';
import { generatePassword } from '../../util/generate-password';

export const GenPass = () => {
  const password = generatePassword(20, true, true, true);
  return <div>{password}</div>;
};
