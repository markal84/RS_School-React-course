import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Test', () => {
  test('full app render', () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/RS School React - week1 - Components/i)).toBeInTheDocument();
  });
});
