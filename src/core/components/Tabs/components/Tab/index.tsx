import React from 'react';
import clsx from "clsx";
import styles from './styles.scss';
import { Props } from './types';
import Typography from "../../../Typography";

function Tab({ isActive, className, children, ...otherProps }: Props) {
    const classes = clsx(
        styles.tab,
        { [styles.isActive]: !!isActive },
        className,
    );
    return (
        <div className={classes} {...otherProps}><Typography>{children}</Typography></div>
    )
}

export default Tab;
