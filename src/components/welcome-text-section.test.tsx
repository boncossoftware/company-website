import { render, screen } from '@testing-library/react';
import WelcomeTextSection from './welcome-text-section';

test('renders correctly', () => {
  render(<WelcomeTextSection text="test" />);
});
