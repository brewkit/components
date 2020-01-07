import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../../Button';
import { Props } from './types';

/**
 * The `DialogButton` component applies a class to the `Button` component for consistent dialog styling.
 */
function DialogButton({ 
    className, 
    ...otherProps 
}: Props): ReactElement {
    const classes = clsx(
        'brew-Dialog__button',
        className,
    );

    return (
        <Button className={classes} {...otherProps} />
    );
}


export default DialogButton;
