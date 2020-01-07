import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';

/**
 * The `DialogBody` component can be used for wrapping the content of a dialog component.
 */
function DialogBody({ 
    className, 
    ...otherProps 
}: Props): ReactElement {
    const classes = clsx(
        'brew-Dialog__body',
        className,
    );

    return (
        <div className={classes} {...otherProps} />
    );
}


export default DialogBody;
