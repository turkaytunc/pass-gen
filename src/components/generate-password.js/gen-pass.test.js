import React from 'react';
import { render } from '@testing-library/react';
import { GenPass } from './gen-pass';

test('renders GenPass Travis link', () => {
  const { getByText } = render(<GenPass />);
  const linkElement = getByText(/Generate Password/i);
  expect(linkElement).toBeInTheDocument();
});
