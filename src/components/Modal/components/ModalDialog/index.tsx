import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function ModalDialog(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal__dialog',
        className,
    );

    return (
        <div className={classes} {...otherProps} />
    );
}

export default ModalDialog;
