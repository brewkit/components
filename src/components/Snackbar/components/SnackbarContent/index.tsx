/* eslint-disable no-undef */
import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import { Snackbar as MuiSnackbar, SnackbarContent as MuiSnackbarContent } from '@material-ui/core';


const SnackbarContent = React.forwardRef(({
    className,
    snacks,
}: any, ref: React.Ref<any>): React.ReactElement => {
    const snack = {};
    const [open, setOpen] = React.useState(false);

    console.log(snacks);

    const handleClose = (event: SyntheticEvent, reason: string): void => {
        if (event) event.stopPropagation();
        if (reason === 'clickaway') return;

        setOpen(false);
    };

    /*
     *const getAnchor = (): any => {
     *    // const anchorArray = snack.position.split('-');
     *
     *    // const [vertical, horizontal] = anchorArray;
     *
     *    return {
     *        vertical,
     *        horizontal,
     *    };
     *};
     */

    const snackbarClasses = clsx(
        'brew-Snackbar',
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        // `brew-Snackbar--${snack.color}`,
        className,
    );


    return (
        <MuiSnackbar
            autoHideDuration={null}
            className={snackbarClasses}
            onClose={handleClose}
            open={open}
            {...snack}
        >
            <MuiSnackbarContent />
        </MuiSnackbar>
    );
});


SnackbarContent.displayName = 'Snackbar';


export default SnackbarContent;
