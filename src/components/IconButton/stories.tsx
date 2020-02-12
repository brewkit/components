import React, { ReactElement } from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import IconButton from './index';
import Flag from '@components/Flag';


export default {
    component: IconButton,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Components|User Input/IconButton',
};


export const General = (): ReactElement => {
    const children: string = text('children', '360');
    const label: string = text('label', 'delete');
    const isLoading: boolean = boolean('isLoading', false);
    const isFluid: boolean = boolean('isFluid', false);
    const isCircular: boolean = boolean('isCircular', false);
    const isDisabled: boolean = boolean('isDisabled', false);
    return (
        <IconButton
            isCircular={isCircular}
            isDisabled={isDisabled}
            isFluid={isFluid}
            isLoading={isLoading}
            label={label}
            onClick={action('button-click')}
        >
            {children}
        </IconButton>
    );
};
