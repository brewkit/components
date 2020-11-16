import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { text, select } from '@storybook/addon-knobs';
import { DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Button } from '../Button';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';

import { Dialog as Component } from './index';
import styles from './styles';

const Dialog = withStyles(styles)(Component);

export default {
    component: Component,
    title: 'Data Display/Dialog',
};

export const Sandbox = (): React.ReactElement => {
    const [open, setOpen] = React.useState(false);

    const title = text('title', 'Dialog Title');
    const severity = select('severity', ['error', 'warning', 'info', 'success'], 'success');
    const dialogText = text('dialogText', 'Dialog description');

    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                severity={severity}
                title={title}
            >
                <DialogContent>
                    <DialogContentText>{dialogText}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth={true} onClick={handleClose}>Confirm</Button>
                    <Button fullWidth={true} onClick={handleClose} color='secondary'>Second Action</Button>
                    <Button fullWidth={true} onClick={handleClose} variant='text'>Cancel</Button>
                </DialogActions>

            </Dialog>

            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        </React.Fragment>
    );
};

export const DifferentIcon = (): React.ReactElement => {
    const [open, setOpen] = React.useState(false);

    const title = text('title', 'Contact Support?');
    const severity = select('severity', ['error', 'warning', 'info', 'success'], 'info');
    const dialogText = text('dialogText', 'Contact support for more information.');

    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Dialog
                icon={<ContactSupportOutlinedIcon fontSize='inherit' />}
                open={open}
                onClose={handleClose}
                severity={severity}
                title={title}
            >
                <DialogContent>
                    <DialogContentText>{dialogText}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth={true} onClick={handleClose}>Confirm</Button>
                    <Button fullWidth={true} onClick={handleClose} variant='text'>Cancel</Button>
                </DialogActions>

            </Dialog>

            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        </React.Fragment>
    );
};
