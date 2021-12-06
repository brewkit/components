import * as React from 'react';
import ButtonGroup from '@components/ButtonGroup';
import Button from '@components/Button';


export default {
    component: ButtonGroup,
    title: 'Inputs/ButtonGroup',
};

const defaultArgs = {
    disabled: false,
    disableElevation: true,
    color: 'primary',
    fullWidth: false,
    variant: 'contained',
    orientation: 'horizontal',
};

export const Sandbox = (args: any): React.ReactElement => (
    <ButtonGroup {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>);
Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};