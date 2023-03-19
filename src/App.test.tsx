import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

global.fetch = jest.fn();

describe('Test', () => {
  test('is fetching function present', async () => {
    await act(async () => render(<App />, { wrapper: BrowserRouter }));

    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
  });

  test('Second link should be about page', async () => {
    await act(async () => render(<App />, { wrapper: BrowserRouter }));

    const links: HTMLAnchorElement[] = screen.getAllByRole('link');
    expect(links[1].textContent).toEqual('About');
  });
});
