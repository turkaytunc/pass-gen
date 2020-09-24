import React from 'react';
import { generatePassword } from '../util/generate-password';

export const Hello = () => {
  console.log(generatePassword(20, true, true, true));
  return (
    <div>
      <h1>Hello Travis</h1>
      <h2>Deploy via travis</h2>
    </div>
  );
};
