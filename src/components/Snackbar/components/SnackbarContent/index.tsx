import React from 'react';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import { Flipped } from 'react-flip-toolkit';
import useSnackbar from '../../hooks/useSnackbar';


const SnackbarContent = ({
    snack,
}: any): React.ReactElement => {
    const [open, setOpen] = React.useState(snack.open);
    const { remove } = useSnackbar();


    const handleClose = (event: any, reason: any): any => {

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
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
