import React, { ReactElement } from 'react';
import Dialog from './index';
import Button from '../Button';
import Label from '../Label';
import { select } from '@storybook/addon-knobs';

export default {
    component: Dialog,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Dialog',
};


export const Default = (): ReactElement => {
    const [isOpen, setIsOpen] = React.useState(true);
    const variant = select('variant', {
        danger: 'danger',
        info: 'info',
        success: 'success',
        warning: 'warning',
    }, 'info');
    const icons = {
        danger: 'highlight_off',
        info: 'info',
        success: 'check_circle',
        warning: 'report_problem',
    };

    const handleOnClick = (): void => {
        setIsOpen(true);
    };

    const handleBackgroundClick = (): void => {
        setIsOpen(false);
    };

    const handleButtonClick = (): void => {
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOnClick}>Click To Open</Button>
            <Dialog
                onBackgroundClick={handleBackgroundClick}
                open={isOpen}
                variant={variant}
            >
                <Dialog.Header>
                    <Dialog.Icon>{icons[variant]}</Dialog.Icon>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>Something definitely happened here</Dialog.Body>
                <Dialog.Footer>
                    <Dialog.Button onClick={handleButtonClick}>Confirm</Dialog.Button>
                    <Dialog.Button onClick={handleButtonClick} variant="text">Cancel</Dialog.Button>
                </Dialog.Footer>
            </Dialog>
        </React.Fragment>
    );
};
