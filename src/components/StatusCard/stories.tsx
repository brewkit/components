import React, { ReactElement } from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import StandardStatusCard from './Components/Standard';
import CompactStatusCard from './Components/Compact';
import StatusCard from './index';
import { Colors, Variants } from './types';


export default { title: 'Components|Display/Status Card' };

const body: string = text('body', 'churros');
const color: Colors = select('color', ['info', 'success', 'danger'], 'info');
const disabled: boolean = boolean('disabled', false);
const fill: boolean = boolean('fill', false);
const header: string = text('header', '23');
const icon: string = text('icon', 'business');
const variant: Variants = select('variant', ['standard', 'compact'], 'standard');

export const General = (): ReactElement => (
    <StatusCard
        body={body}
        color={color}
        disabled={disabled}
        fill={fill}
        header={header}
        icon={icon}
        variant={variant}
    />
);

export const Standard = (): ReactElement => (
    <StandardStatusCard
        body={body}
        color={color}
        disabled={disabled}
        fill={fill}
        header={header}
        icon={icon}
    />
);

export const Compact = (): ReactElement => (
    <CompactStatusCard
        body={body}
        color={color}
        disabled={disabled}
        fill={fill}
        header={header}
    />
);
