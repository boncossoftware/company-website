import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('renders correctly', () => {
  render(<Footer />);
  
  const year = (new Date()).getFullYear();
  const copyright = screen.getByText(`Copyright © ${year} Posco Enterprises VBA. All rights reserved.`);
  expect(copyright).toBeInTheDocument();

  const chamber = screen.getByText('KvK 45207.0');
  expect(chamber).toBeInTheDocument();

  const place = screen.getByText('Paradera, Aruba');
  expect(place).toBeInTheDocument();
});
