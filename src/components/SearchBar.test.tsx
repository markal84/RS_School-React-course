import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Search bar', () => {
  render(<SearchBar />);

  it('search input renders correctly', () => {
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(1);
  });
});
