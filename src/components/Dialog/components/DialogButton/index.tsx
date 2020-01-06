import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../../Button';
import { Props } from './types';


function DialogButton(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Dialog__button',
        className,
    );

    return (
        <Button className={classes} {...otherProps} />
    );
}

export default DialogButton;