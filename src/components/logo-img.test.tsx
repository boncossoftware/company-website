import { render, screen } from '@testing-library/react';
import LogoImg from './logo-img';

test('renders correctly', () => {
    render(
        <LogoImg />
    );
    const logoElement = screen.getByAltText(/boncos logo/gi);
    expect(logoElement).toBeInTheDocument();
});
