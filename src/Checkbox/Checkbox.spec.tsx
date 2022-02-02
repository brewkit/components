import React from 'react';
import { render, screen, fireEvent } from '../testUtils';
import { queryByTestId } from '@testing-library/dom'
import { Checkbox } from '..';

describe('<Checkbox />', () => {

    test('renders Checkbox component', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })

    test('change icon from checkedIcon to uncheckedIcon in the document when user clciks', () => {

        const { container } = render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent(
            checkbox,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )
        const checkedIcon: any = queryByTestId(container, 'checkedIcon');
        expect(checkedIcon).toBeInTheDocument();
        fireEvent(
            checkbox,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )
        const uncheckedIcon: any = queryByTestId(container, 'uncheckedIcon');
        expect(uncheckedIcon).toBeInTheDocument();

    })
});
