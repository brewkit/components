import React from 'react';
import { select } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Icon from '@components/Icon';
import AppBar from '@components/AppBar';
import { Colors as ColorOptions } from '../types';


export default {
    component: AppBar,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/AppBar',
};


export const Sandbox = (): React.ReactElement => {


    const color: ColorOptions = select(
        'color',
        ['primary', 'secondary', 'tertiary', 'light', 'dark'],
        'dark'
    );

    const anchorFrom = select(
        'anchorFrom',
        ['top', 'right', 'bottom', 'left'],
        'left',
    );


    return (
        <AppBar
            anchorFrom={anchorFrom}
            className="custom-appbar-class"
            color={color}
        >
            <Icon color="primary" size="large">add_circle</Icon>
            <Icon color="primary" size="large">contacts</Icon>
            <Icon color="primary" size="large">business</Icon>
            <Icon color="primary" size="large">add</Icon>
            <Icon color="primary" size="large">more_vert</Icon>
        </AppBar>
    );


};
