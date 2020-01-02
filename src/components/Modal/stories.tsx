import React, { ReactElement } from 'react';
import Modal from './index';
import Button from '../Button';
import Label from '../Label';


export default {
    component: Modal,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Modal',
};


export const Default = (): ReactElement => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOnClick = (): void => {
        setIsOpen((current: boolean) => !current);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOnClick}>Click To Open</Button>
            <Modal
                open={isOpen}>
                <Modal.Header>
                    <Modal.Icon>report_problem</Modal.Icon>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Modal.Button>Confirm</Modal.Button>
                    <Modal.Button>Cancel</Modal.Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};
