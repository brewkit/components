import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import { Props } from './types';

/**
 * The `DialogIcon` component is used to apply a custom dialog icon to a dialog
 * component.
 */
function DialogIcon({ 
    className, 
    ...otherProps 
}: Props): ReactElement {
    const classes = clsx(
        'brew-Dialog__icon',
        className,
    );

    return (
        <Icon className={classes} {...otherProps} />
    );
}


export default DialogIcon;
