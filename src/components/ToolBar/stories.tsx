import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import ToolBar from './index';
import Flag from '@components/Flag';
import Paper from '@components/Paper';
import { variants, Variants } from './types';


export default {
    component: ToolBar,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Display/Tool Bar',
};


export const General = (): React.ReactElement => {

    const variant: Variants = select('variant', variants, variants[0]);
    const disableGutters: boolean = boolean('disableGutters', false);

    return (
        <ToolBar disableGutters={disableGutters} variant={variant}>
            <Paper style={{ marginRight: '1rem', padding: '1rem' }}>foo</Paper>
            <Paper style={{ flexGrow: 1, marginRight: '1rem', padding: '1rem' }}>bar</Paper>
            <Paper style={{ padding: '1rem' }}>buz</Paper>
        </ToolBar>
    );

};


export const Default = (): React.ReactElement => <ToolBar>Default</ToolBar>;
