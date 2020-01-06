import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function DialogTitle(props: Props): ReactElement {
    const { className, children, ...otherProps } = props;
    const classes = clsx(
        'brew-Dialog__title',
        className,
    );

    return (
        <Typography as="h2" className={classes} {...otherProps}>{children}</Typography>
    );
}

export default DialogTitle;
