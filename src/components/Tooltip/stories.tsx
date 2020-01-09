import React, { ReactElement } from 'react';
import {select, text} from '@storybook/addon-knobs';
import Tooltip from './index';
import Label from '../Label';
import Icon from '../Icon';
import { Colors, Anchors } from './types';


export default {
    component: Tooltip,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Tooltip',
};


export const General = (): ReactElement => {
    const content = text('content', 'Beware of dangerous waters');
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

    return (
        <Tooltip
            content={content}
            color={color}
            anchor={anchor}
        >
            <Icon color="danger" size="large">error</Icon>
        </Tooltip>
    );
};
