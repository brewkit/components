import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function DialogBody(props: Props): ReactElement {
    const { className, children, ...otherProps } = props;
    const classes = clsx(
        'brew-Dialog__body',
        className,
    );

    return (
        <Typography as="div" className={classes} {...otherProps}>{children}</Typography>
    );
}

export default DialogBody;
