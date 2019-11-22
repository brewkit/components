import React from "react";
import clsx from "clsx";
import styles from './styles.scss';
import { Props } from './types';


const Input = ({ as = 'input', type = 'text', className, children, ...otherProps }: Props & React.AllHTMLAttributes<HTMLElement>) => {
    const classes = clsx(
        styles.input,
        className,
    );

    const Element = as;

    return (
        <Element className={classes} {...otherProps}>{children}</Element>
    );
};

export default Input;
