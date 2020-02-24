import React, { ReactElement } from 'react';
import { select } from '@storybook/addon-knobs';
import Icon from './index';
import Typography from '../Typography';
import { Colors, Sizes } from './types';
import Flag from '@components/Flag';
import icons from './iconList';


export default {
    component: Icon,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Display/Icon',
};


export const Sandbox = (): ReactElement => {
    const color: Colors = select('color', [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'inherit',
    ], 'primary');
    const size: Sizes = select('size', ['small', 'medium', 'large'], 'small');
    const children: string = select(
        'children',
        icons,
        icons[0],
    );

    return (
        <div>
            <Icon color={color} size={size}>{children}</Icon>
        </div>
    );
};


export const IconList = (): ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
        {icons.map((icon: string, index: number) => (
            <div key={index} style={{ alignContent: 'center', display: 'flex' }}>
                <span style={{ marginRight: '0.5rem' }}>
                    <Icon size="large">{icon}</Icon>
                </span>
                <Typography>{icon}</Typography>
            </div>
        ))}
    </div>
);
