import React from 'react';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import { Flipped } from 'react-flip-toolkit';
import useSnackbar from '../../hooks/useSnackbar';


const SnackbarContent = ({
    snack,
    ...contentProps
}: any): React.ReactElement => {
    const [open, setOpen] = React.useState(snack.open);
    const { remove } = useSnackbar();


    const handleClose = (event: any, reason: any): any => {

        if (reason === 'clickaway') return;

        setOpen(false);
        remove(snack.key);
    };


    const classes = {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        root: `brew-SnackbarContent brew-SnackbarContent--${snack.color}`,
    };


    return (
        <Flipped flipId={snack.key}>
            <MuiSnackbar
                autoHideDuration={snack.duration ?? null}
                classes={classes}
                onClose={handleClose}
                open={open}
                {...contentProps}
            >
                <div>{snack.message}
                </div>
            </MuiSnackbar>
        </Flipped>
    );

};


export default SnackbarContent;
