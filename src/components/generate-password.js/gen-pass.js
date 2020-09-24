import React, { useState } from 'react';
import { generatePassword } from '../../util/generate-password';
import usePassword from '../use-password/use-password';

export const GenPass = () => {
  const [password, pass] = usePassword();
  return (
    <div>
      <button onClick={() => pass()}>Generate Password</button>
      {password}
    </div>
  );
};
