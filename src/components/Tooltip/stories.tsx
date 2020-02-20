import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Button from '@components/Button';
import Tooltip from '@components/Tooltip';
import { Placements } from './types';


export default {
    component: Tooltip,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/Tooltip',
};


const placementOptions = [
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
];


export const General = (): React.ReactElement => {

    const title = text('title', 'Tooltips are used to provide more information about a feature. Typically tooltips are positioned with an info icon or an error icon in a form field or select item.');
    const placement = select('placement', placementOptions, 'bottom');

    return (
        <Tooltip placement={placement as Placements} title={title}>
            <Button>Hover over me!</Button>
        </Tooltip>
    );

};


const title = 'Tooltips are used to provide more information about a feature. Typically tooltips are positioned with an info icon or an error icon in a form field or select item.';
export const PlacementOptions = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem', gridAutoFlow: 'column' }}>
        {
            placementOptions.map((position: string) => (
                <Tooltip key={position} placement={position as Placements} title={title}>
                    <Button>{position}</Button>
                </Tooltip>
            ))
        }
    </div>
);
