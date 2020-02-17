import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import Paper from './index';
import Flag from '@components/Flag';
import { Variants } from './types';


export default {
    component: Paper,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Surfaces/Paper',
};


const styles = { height: '100px', margin: '8px', width: '100px' };


export const General = (): React.ReactElement => {

    const elevation: number = number('elevation', 1);
    const isRounded: boolean = boolean('isRounded', true);
    const variant: Variants = select('variant', ['elevation', 'outlined'], 'elevation');

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Paper elevation={elevation} isRounded={isRounded} style={styles} variant={variant} />
            <Paper elevation={elevation + 1} isRounded={isRounded} style={styles} variant={variant} />
            <Paper elevation={elevation + 2} isRounded={isRounded} style={styles} variant={variant} />
        </div>
    );

};


export const Default = (): React.ReactElement => <Paper>Default</Paper>;
export const Elevations = (): React.ReactElement => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Paper elevation={0} style={styles}>0</Paper>
        <Paper elevation={1} style={styles}>1</Paper>
        <Paper elevation={2} style={styles}>2</Paper>
        <Paper elevation={3} style={styles}>3</Paper>
        <Paper elevation={4} style={styles}>4</Paper>
        <Paper elevation={5} style={styles}>5</Paper>
    </div>
);
export const Outlined = (): React.ReactElement => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Paper elevation={0} style={styles} variant="outlined">0</Paper>
        <Paper elevation={1} style={styles} variant="outlined">1</Paper>
        <Paper elevation={2} style={styles} variant="outlined">2</Paper>
        <Paper elevation={3} style={styles} variant="outlined">3</Paper>
        <Paper elevation={4} style={styles} variant="outlined">4</Paper>
        <Paper elevation={5} style={styles} variant="outlined">5</Paper>
    </div>
);
export const Boxed = (): React.ReactElement => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Paper elevation={0} isRounded={false} style={styles}>0</Paper>
        <Paper elevation={1} isRounded={false} style={styles}>1</Paper>
        <Paper elevation={2} isRounded={false} style={styles}>2</Paper>
        <Paper elevation={3} isRounded={false} style={styles}>3</Paper>
        <Paper elevation={4} isRounded={false} style={styles}>4</Paper>
        <Paper elevation={5} isRounded={false} style={styles}>5</Paper>
    </div>
);

