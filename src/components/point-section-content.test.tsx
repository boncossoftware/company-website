import { render, screen } from '@testing-library/react';
import PointSectionContent, {Point} from './point-section-content';

test('renders correctly', () => {
    render(
        <PointSectionContent>
            <Point>Test</Point>
        </PointSectionContent>
    );
    const pointElement = screen.getByText('Test');
    expect(pointElement).toBeInTheDocument();
});
