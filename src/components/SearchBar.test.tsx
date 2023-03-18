import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Search bar', () => {
  render(<SearchBar />);

  it('renders correctly initial document', () => {
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(1);
  });
});
