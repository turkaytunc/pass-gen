import React from 'react';
import usePassword from '../use-password/use-password';

export const GenPass = () => {
  const [password, pass] = usePassword();
  return (
    <div>
      <button onClick={() => pass(20, true, true, true)}>
        Generate Password
      </button>
      {password}
    </div>
  );
};
