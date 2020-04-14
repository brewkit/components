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
            <Icon color="primary">add_circle</Icon>
            <Icon color="primary">contacts</Icon>
            <Icon color="primary">business</Icon>
            <Icon color="primary">add</Icon>
            <div style={{flexGrow: 1}}/>
            <Icon color="primary">more_vert</Icon>
        </AppBar>
    );


};
