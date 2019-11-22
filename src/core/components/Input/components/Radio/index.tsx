import React from "react";
import Input from '../../index';
import clsx from "clsx";
import { Props } from './types';

function Radio({ className, ...otherProps }: Props) {
    const classes = clsx(
        className,
    );

    return (
        <Input type="radio" className={classes} {...otherProps} />
    );
}

export default Radio;
