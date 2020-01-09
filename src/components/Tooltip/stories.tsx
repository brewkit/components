import React, { ReactElement } from 'react';
import {select, text, boolean} from '@storybook/addon-knobs';
import Tooltip from './index';
import Label from '../Label';
import Icon from '../Icon';
import { Variants, Colors, Anchors } from './types';


export default {
    component: Tooltip,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Tooltip',
};


export const General = (): ReactElement => {
    const content = text('content', 'Beware of dangerous waters');
    const variant: Variants = select('variant', ['click', 'hover', 'timeout'], 'click');
    const color: Colors = select('color', [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ], 'danger');
    const anchor: Anchors = select('anchor', ['top', 'right', 'bottom', 'left'], 'right');
    const isOpen = boolean('isOpen', false);

    return (
        <Tooltip
            variant={variant}
            content={content}
            color={color}
            anchor={anchor}
            isOpen={isOpen}
        >
            <Icon color="danger" size="large">error</Icon>
        </Tooltip>
    );
};
