import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function DialogHeader(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Dialog__header',
        className,
    );

    return (
        <div className={classes} {...otherProps} />
    );
}

export default DialogHeader;