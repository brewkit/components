import * as React from 'react';
import {text, select, boolean} from '@storybook/addon-knobs';
import ButtonGroup from '@components/ButtonGroup';
import Button from '@components/Button';


export default {
    component: ButtonGroup,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/ButtonGroup',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['default', 'primary', 'secondary', 'inherit'], 'primary');
    const disabled = boolean('disabled', false);
    const disableElevation = boolean('disableElevation', true);
    const variant = select('variant', ['contained', 'outlined', 'text'], 'contained');
    const orientation = select('orientation', ['vertical', 'horizontal'], 'horizontal');

    return (
        <ButtonGroup
            variant={variant}
            color={color}
            disabled={disabled}
            disableElevation={disableElevation}
            orientation={orientation}
        >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    );

};
