import React from 'react';
import { render } from '@testing-library/react';
import { Hello } from './Hello';

test('renders Hello Travis link', () => {
  const { getByText } = render(<Hello />);
  const linkElement = getByText(/Deploy via travis/i);
  expect(linkElement).toBeInTheDocument();
});
