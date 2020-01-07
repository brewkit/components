import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';

/**
 * The `DialogFooter` component can be used for wrapping the footer content
 * of a dialog.  It applies a className for consistency.
 */
function DialogFooter({ 
    className, 
    ...otherProps 
}: Props): ReactElement {
    const classes = clsx(
        'brew-Dialog__footer',
        className,
    );

    return <div className={classes} {...otherProps} />;
}


export default DialogFooter;
