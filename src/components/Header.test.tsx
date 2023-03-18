import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../components/Header';

test('render content', () => {
  render(<Header />);

  const element: HTMLElement = screen.getByText('RS School React - week1 - Components');
  expect(element).toBeDefined();
});
