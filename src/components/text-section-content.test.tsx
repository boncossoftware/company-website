import { render, screen } from '@testing-library/react';
import TextSectionContent from './text-section-content';

test('renders correctly', () => {
    render(
        <TextSectionContent>
            Test
        </TextSectionContent>
    );
    const contentElement = screen.getByText('Test');
    expect(contentElement).toBeInTheDocument();
});
