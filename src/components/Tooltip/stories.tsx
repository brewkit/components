import React, { ReactElement } from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Tooltip from './index';
import Label from '../Label';
import Icon from '../Icon';
import { TriggerEvents, Colors, Anchors } from './types';


export default {
    component: Tooltip,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Tooltip',
};


export const General = (): ReactElement => {
    const content = text('content', 'Beware of dangerous waters');
    const triggerEvent: TriggerEvents = select('variant', ['click', 'hover'], 'click');
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
            anchor={anchor}
            color={color}
            content={content}
            isOpen={isOpen}
            triggerEvent={triggerEvent}
        >
            <Icon color="danger" size="large">error</Icon>
        </Tooltip>
    );
};
