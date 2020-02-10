import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { Props } from './types';


/**
 * The `IconButton` component is a extension of `Button`, that incorporates a different, icon-focused look-and-feel.
 */
function IconButton({
    className,
    label,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-IconButton',
        className,
    );


    return (
        <Button className={classes} isCompact variant="text" {...otherProps}>
            <div className="brew-IconButton__label">{label}</div>
            <Icon>{children}</Icon>
        </Button>
    );


}


export default IconButton;
