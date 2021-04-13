import { render, screen } from '@testing-library/react';
import Section from './section';

test('renders correctly', () => {
  render(<Section title='test' />);
});
