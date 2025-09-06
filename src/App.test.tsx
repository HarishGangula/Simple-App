import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simple App welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Simple App/i);
  expect(welcomeElement).toBeInTheDocument();
});
