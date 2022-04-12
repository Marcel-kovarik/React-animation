import { render, screen } from '@testing-library/react';
import BuildApp from './App';

test('renders learn react link', () => {
  render(<BuildApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
