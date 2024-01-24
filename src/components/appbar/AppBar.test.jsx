import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import AppBar from './AppBar';

describe('AppBar', () => {
    it('should render default navigation items', () => {
        render(<AppBar />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Results')).toBeInTheDocument();
        expect(screen.getByText('Videos')).toBeInTheDocument();
    });

    it('should render with default transparent background', () => {
        render(<AppBar />);

        expect(screen.getByRole('navigation')).toHaveClass("bg-transparent");
    });

    it('should render with filled background when filled prop is passed', () => {
        render(<AppBar variant='filled' />);

        expect(screen.getByRole('navigation')).toHaveClass("bg-secondary-purple");
    })
});
