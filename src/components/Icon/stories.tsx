import React from 'react';
import { select } from '@storybook/addon-knobs';
import Icon from './index';
import Typography from '../Typography';
import { Colors, Sizes } from './types';
import Label from '../Label';
import icons from './material-icons/dist/_list';


export default {
    title: 'Components|Display/Icon',
    component: Icon,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
    },
};


export const General = () => {
    const color: Colors = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'inherit'], 'primary');
    const size: Sizes = select('size', ['small', 'medium', 'large', 'inherit'], 'inherit');
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


export const IconList = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '1rem' }}>
            {icons.map((icon, index) => (
                <div style={{ display: 'flex', alignContent: 'center' }}>
                    <span style={{ marginRight: '0.5rem' }}>
                        <Icon size="large" key={index}>{icon}</Icon>
                    </span>
                    <Typography>{icon}</Typography>
                </div>
            ))}
        </div>
    );
};
