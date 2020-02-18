import React, { ReactElement } from 'react';
import clsx from 'clsx';
import SnackbarContext from '../../context';


function SnackbarItem({
    className,
    snack,
}: any): ReactElement {


    const snackbar: any = React.useContext(SnackbarContext);


    const snackClasses = clsx(
        'brew-Snackbar__item',
        className,
    );


    const handleClose = (key: any): void => {
        if (snackbar) snackbar.remove(key);
    };


    return (
        <div className={snackClasses}>
            {snack.content}
            <span onClick={(): void => handleClose(snack.key)}>&times;</span>
        </div>
    );
}


export default SnackbarItem;
