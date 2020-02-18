import React, { ReactElement } from 'react';
import clsx from 'clsx';


function SnackbarContainer({
    className,
    position,
    ...otherProps
}: any): ReactElement {


    const containerClasses = clsx(
        'brew-Snackbar',
        `brew-Snackbar--${position}`,
        className,
    );


    return (
        <div className={containerClasses} {...otherProps} />
    );


}


export default SnackbarContainer;
