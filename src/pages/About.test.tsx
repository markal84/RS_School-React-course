import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

test('renders about page', () => {
  render(<About />);
  expect(screen.getByText('This is a about page')).toBeInTheDocument();
});
