import React from "react";
import clsx from "clsx";
import styles from './styles.scss';
import { Props } from './types';
export { default as Tab } from './components/Tab';

function Tabs({ children, className, ...otherProps }: Props) {
    const classes = clsx(
        styles.tabs,
        className,
    );
    return (
        <div className={classes} {...otherProps}>{children}</div>
    )
}

export default Tabs;
