import React from "react";
import { Props } from './types';
import clsx from "clsx";

function FormGroup({ className, children, ...otherProps }: Props) {
    const classes = clsx(
        className,
    );

    return (
        <div className={classes} {...otherProps}>{children}</div>
    );
}

export default FormGroup;
