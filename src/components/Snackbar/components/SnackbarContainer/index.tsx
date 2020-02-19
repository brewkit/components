import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function SnackbarContainer({
    className,
    position = 'topRight',
    ...otherProps
}: Props): ReactElement {


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
