import React from 'react';
import { GenPass } from '../generate-password.js/gen-pass';

export const DisplayPassword = () => {
  return (
    <div>
      <p>Simple Password Generator</p>
      <GenPass></GenPass>
    </div>
  );
};
