import React, { ReactElement } from 'react';
import Modal from './index';
import Button from '../Button';
import Label from '../Label';
import { select } from '@storybook/addon-knobs';

export default {
    component: Modal,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Modal',
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

    return (
        <React.Fragment>
            <Button onClick={handleOnClick}>Click To Open</Button>
            <Modal
                onBackgroundClick={handleBackgroundClick}
                open={isOpen}
                variant={variant}
            >
                <Modal.Header>
                    <Modal.Icon>{icons[variant]}</Modal.Icon>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Something definitely happened here</Modal.Body>
                <Modal.Footer>
                    <Modal.Button>Confirm</Modal.Button>
                    <Modal.Button variant="secondary">Cancel</Modal.Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};
