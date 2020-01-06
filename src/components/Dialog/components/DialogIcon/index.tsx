import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import { Props } from './types';


function DialogIcon(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Dialog__icon',
        className,
    );

    return (
        <Icon className={classes} {...otherProps} />
    );
}

export default DialogIcon;
