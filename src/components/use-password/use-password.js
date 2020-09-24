import { useState } from 'react';
import { generatePassword } from '../../util/generate-password';

export default function usePassword() {
  const [password, setPassword] = useState('');
  function pass(length, isUpper, isLower, isPunctuation) {
    const password = generatePassword(length, isUpper, isLower, isPunctuation);

    setPassword(password);
  }

  return [password, pass];
}
