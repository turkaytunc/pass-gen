import React from 'react';
import { generatePassword } from '../util/generate-password';

export const Hello = () => {
  console.log(generatePassword(3, true));
  return (
    <div>
      <h1>Hello Travis</h1>
      <h2>Deploy via travis</h2>
    </div>
  );
};
