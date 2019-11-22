import React from "react";
import Input from '../../index';
import clsx from "clsx";
import { Props } from './types';

function Select({ className, children, ...otherProps }: Props) {
    const classes = clsx(
        className,
    );

    return (
        <Input as="select" className={classes} {...otherProps}>{children}</Input>
    );
}

export default Select;
