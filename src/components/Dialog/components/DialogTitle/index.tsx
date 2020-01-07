import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';

/**
 * The `DialogTitle` component supplies a consisten interface for styling the 
 * title of a dialog component.
 */
function DialogTitle({ 
    className, 
    children, 
    ...otherProps 
}: Props): ReactElement {
    const classes = clsx(
        'brew-Dialog__title',
        className,
    );

    return (
        <Typography as="h2" className={classes} {...otherProps}>{children}</Typography>
    );
}


export default DialogTitle;
