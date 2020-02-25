import React from 'react';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import { Flipped } from 'react-flip-toolkit';
import useSnackbar from '../../hooks/useSnackbar';
import { Props } from './types';


const SnackbarContent = ({
    snack,
}: Props): React.ReactElement => {

    // default auto hide

    // if no duration, show a node to close


    const [open, setOpen] = React.useState(snack.open);
    const { remove } = useSnackbar();


    const handleClose = (event: Event, reason: string): void => {
        if (event) event.stopPropagation();

        if (reason === 'clickaway') return;

        setOpen(false);
        remove(snack.key);
    };


    const getAnchor = (): any => {
        const anchorArray = snack.position.split('-');
        const [vertical, horizontal] = anchorArray;

        return {
            vertical,
            horizontal,
        };
    };


    const classes = {
        root: `brew-SnackbarContent brew-SnackbarContent--${snack.color}`,
    };


    return (
        <Flipped flipId={snack.key}>
            <MuiSnackbar
                anchorOrigin={getAnchor()}
                autoHideDuration={snack.duration ?? null}
                classes={classes}
                onClose={handleClose}
                open={open}
                {...snack.otherProps}
            >
                <div>{snack.message}
                </div>
            </MuiSnackbar>
        </Flipped>
    );

};


export default SnackbarContent;
