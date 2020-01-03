import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function ModalBody(props: Props): ReactElement {
    const { className, children, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal__body',
        className,
    );

    return (
        <Typography as="div" className={classes} {...otherProps}>{children}</Typography>
    );
}

export default ModalBody;
