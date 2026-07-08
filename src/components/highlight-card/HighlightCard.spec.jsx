import { screen, render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { HighlightCard } from './HighlightCard';

describe('HighlightCard', () => {
    it('renders the HighlightCard component with correct props', () => {
        const imageUrl = '/test-image.jpg';
        const altText = 'Test Image';
        const pageUrl = '/test-page';
        const pageText = 'Test Page';

        render(
            <HighlightCard
                imageUrl={imageUrl}
                altText={altText}
                pageUrl={pageUrl}
                pageText={pageText}
            />
        );

        expect(screen.getByAltText(altText)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: pageText })).toHaveAttribute(
            'href',
            pageUrl
        );
    });
});
