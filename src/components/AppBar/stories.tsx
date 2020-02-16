import React from 'react';
import { select } from '@storybook/addon-knobs';
import AppBar from './index';
import Flag from '@components/Flag';
import { Colors, Positions, colors, positions } from './types';


export default {
    component: AppBar,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Components|Surfaces/App Bar',
};


export const General = (): React.ReactElement => {

    const color: Colors = select('color', colors, colors[0]);
    const position: Positions = select('position', positions, positions[0]);

    return (
        <AppBar color={color} position={position}>
            <div style={{ marginRight: '1rem', padding: '1rem' }}>foo</div>
            <div style={{ flexGrow: 1, marginRight: '1rem', padding: '1rem' }}>bar</div>
            <div style={{ padding: '1rem' }}>buz</div>
        </AppBar>
    );

};


export const Default = (): React.ReactElement => <AppBar>Default</AppBar>;
