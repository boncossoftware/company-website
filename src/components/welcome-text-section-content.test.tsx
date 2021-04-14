import { render, screen } from '@testing-library/react';
import WelcomeTextSectionContent from './welcome-text-section-content';

test('renders correctly', () => {
  render(<WelcomeTextSectionContent text="test" />);
  const contentElement = screen.getByText('test');
  expect(contentElement).toBeInTheDocument();
});
