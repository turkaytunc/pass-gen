import { useState } from 'react';
import { generatePassword } from '../../util/generate-password';

export default function usePassword() {
  const [password, setPassword] = useState('');
  function pass() {
    const password = generatePassword(20, true, true, true);

    setPassword(password);
  }

  return [password, pass];
}
