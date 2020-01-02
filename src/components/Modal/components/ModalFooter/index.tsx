import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function ModalFooter(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal__footer',
        className,
    );

    return <div className={classes} {...otherProps} />;
}

export default ModalFooter;
