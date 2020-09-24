import React from 'react';
import { GenPass } from '../generate-password.js/gen-pass';
import './display-password.scss';

export const DisplayPassword = () => {
  return (
    <div>
      <p className="simple-pass">Simple Password Generator</p>
      <GenPass></GenPass>
    </div>
  );
};
