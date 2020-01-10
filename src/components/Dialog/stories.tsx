import React, { ReactElement, ReactNode } from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Label from '../Label';
import Dialog from './index';
import Button from '../Button';


export default {
    component: Dialog,
    parameters: {
        componentSubtitle: <Label color="warning">In Progress</Label>,
    },
    title: 'Components|Display/Dialog',
};

export const Default = (): ReactElement => {
    const isOpen = boolean('isOpen', true);
    const variant = select('variant', ['alert', 'confirm'], 'confirm');
    const color = select('color', ['info', 'success', 'warning', 'danger'], 'info');
    const title = text('title', 'Dialog Title');
    const children = text('children', 'This is the text of the dialog');
    return (
        <Dialog 
            isOpen={isOpen} 
            variant={variant} 
            title={title}
            color={color}
        >{children}
        </Dialog>
    );
};