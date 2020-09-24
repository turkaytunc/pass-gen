import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello Travis link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
