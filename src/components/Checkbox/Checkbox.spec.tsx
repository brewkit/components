import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { queryByTestId } from '@testing-library/dom';
import Checkbox from '.';

describe('<Checkbox />', () => {
    test('renders Checkbox component', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    test('test check/uncheck behave', () => {
        const { container } = render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent(
            checkbox,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );
        const checkedIcon: HTMLElement | null = queryByTestId(
            container,
            'checkedIcon',
        );
        expect(checkedIcon).toBeInTheDocument();
        fireEvent(
            checkbox,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );
        const uncheckedIcon: HTMLElement | null = queryByTestId(
            container,
            'uncheckedIcon',
        );
        expect(uncheckedIcon).toBeInTheDocument();
    });
});
