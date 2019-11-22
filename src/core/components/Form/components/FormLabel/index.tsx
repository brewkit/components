import React from "react";
import clsx from "clsx";
import { Props } from './types';

function FormLabel({ as, className, children, ...otherProps }: Props) {
    const classes = clsx(
        className,
    );

    const Element = as || 'label';

    return (
        <Element className={classes} {...otherProps}>{children}</Element>
    )
}

export default FormLabel;
