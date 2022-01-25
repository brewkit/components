import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { queryByTestId } from '@testing-library/dom';
import { TextField } from '..';

describe('<TextField />', () => {
    test('renders TextField component', () => {
        render(<TextField />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('test icon click after provided password type ', () => {
        const { container } = render(
            <TextField label="pass" id="pass" type="password" />,
        );
        const icon = queryByTestId(container, 'visibilityIcon');
        expect(icon).toBeInTheDocument();
        if (icon) {
            fireEvent(
                icon,
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                }),
            );
            expect(screen.getByRole('textbox')).toBeInTheDocument();
        }
    });
});
