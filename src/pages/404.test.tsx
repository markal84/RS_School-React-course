import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './NotFound';

test('renders about page', () => {
  render(<NotFound />);
  expect(screen.getByText('404')).toBeInTheDocument();
});
