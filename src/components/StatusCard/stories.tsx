import React, { ReactElement } from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import StandardStatusCard from './components/Standard';
import CompactStatusCard from './components/Compact';
import StatusCard from './index';
import { Colors, Variants } from './types';


export default { title: 'Components|Display/Status Card' };


export const General = (): ReactElement => {
    const body: string = text('body', 'churros');
    const color: Colors = select('color', ['info', 'success', 'danger'], 'info');
    const disabled: boolean = boolean('disabled', false);
    const fill: boolean = boolean('fill', false);
    const header: string = text('header', '23');
    const icon: string = text('icon', 'business');
    const variant: Variants = select('variant', ['standard', 'compact'], 'standard');
    return (
        <StatusCard
            body={body}
            color={color}
            header={header}
            icon={icon}
            isDisabled={disabled}
            isFilled={fill}
            variant={variant}
        />
    );
};


export const Standard = (): ReactElement => {
    const body: string = text('body', 'dude');
    const color: Colors = select('color', ['info', 'success', 'danger'], 'info');
    const disabled: boolean = boolean('disabled', false);
    const fill: boolean = boolean('fill', false);
    const header: string = text('header', '1');
    const icon: string = text('icon', 'business');
    return (
        <StandardStatusCard
            body={body}
            color={color}
            header={header}
            icon={icon}
            isDisabled={disabled}
            isFilled={fill}
        />
    );
};


export const Compact = (): ReactElement => {
    const body: string = text('body', 'wat');
    const color: Colors = select('color', ['info', 'success', 'danger'], 'info');
    const disabled: boolean = boolean('disabled', false);
    const fill: boolean = boolean('fill', false);
    const header: string = text('header', 'lol');
    return (
        <CompactStatusCard
            body={body}
            color={color}
            header={header}
            isDisabled={disabled}
            isFilled={fill}
        />
    );
};
