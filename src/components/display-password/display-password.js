import React from 'react';
import { GenPass } from '../generate-password.js/gen-pass';

export const DisplayPassword = () => {
  return (
    <div>
      <p>Password</p>
      <GenPass></GenPass>
    </div>
  );
};
