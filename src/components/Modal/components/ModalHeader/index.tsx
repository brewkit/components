import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function ModalHeader(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal__header',
        className,
    );

    return (
        <div className={classes} {...otherProps} />
    );
}

export default ModalHeader;