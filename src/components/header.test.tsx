import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders correctly', () => {
  render(<Header />);
  const logoImage = screen.getByAltText('boncos logo');
  expect(logoImage).toBeInTheDocument();
});
