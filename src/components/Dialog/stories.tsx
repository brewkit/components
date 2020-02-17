import React, { ReactElement } from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Dialog from './index';


export default {
    component: Dialog,
    parameters: {
        componentSubtitle: <Flag color="warning">In Progress</Flag>,
    },
    title: 'In Development|Display/Dialog',
};


export const Default = (): ReactElement => {


    const isOpen = boolean('isOpen', true);
    const variant = select('variant', ['alert', 'confirm'], 'confirm');
    const color = select('color', ['info', 'success', 'warning', 'danger'], 'info');
    const title = text('title', 'Dialog Title');
    const children = text('children', 'This is the text of the dialog');
    return (
        <Dialog
            color={color}
            isOpen={isOpen}
            title={title}
            variant={variant}
        >{children}
        </Dialog>
    );


};
