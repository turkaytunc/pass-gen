import React, { useState } from 'react';
import { generatePassword } from '../../util/generate-password';

export const GenPass = () => {
  const [password, setPassword] = useState('');
  const pass = () => {
    const password = generatePassword(20, true, true, true);

    setPassword(password);
  };

  return (
    <div>
      <button onClick={() => pass()}>Generate Password</button>
      <p>{password}</p>
    </div>
  );
};
