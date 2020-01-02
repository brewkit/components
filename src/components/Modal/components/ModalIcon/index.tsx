import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import { Props } from './types';


function ModalIcon(props: Props): ReactElement {
    const { className, children } = props;
    const classes = clsx(
        'brew-Modal__icon',
        `brew-Modal__icon--${children}`,
        className,
    );

    return (
        <Icon className={classes}>{children}</Icon>
    );
}

export default ModalIcon;
