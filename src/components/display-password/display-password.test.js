import React from 'react';
import { render } from '@testing-library/react';
import { DisplayPassword } from './display-password';

test('renders DisplayPassword Travis link', () => {
  const { getByText } = render(<DisplayPassword />);
  const linkElement = getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
