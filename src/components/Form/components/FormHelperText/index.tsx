import React from 'react';
import clsx from 'clsx';
import styles from './styles.scss';
import { Props } from './types';

function FormHelperText({ color, className, children }: Props) {
    const classes = clsx(
        { [styles[`color-${color}`]]: !!color },
        className,
    );

    return (
        <div className={classes}>{children}</div>
    );
}

export default FormHelperText;
