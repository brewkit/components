import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function ModalBody(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal__body',
        className,
    );

    return (
        <div className={classes} {...otherProps}>body</div>
    );
}

export default ModalBody;
