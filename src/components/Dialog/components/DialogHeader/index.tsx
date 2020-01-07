import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';

/**
 * The `DialogHeader` component can be used to wrap the header content of a 
 * dialog component.
 */
function DialogHeader({ 
    className, 
    ...otherProps 
}: Props): ReactElement {
    const classes = clsx(
        'brew-Dialog__header',
        className,
    );

    return (
        <div className={classes} {...otherProps} />
    );
}


export default DialogHeader;
