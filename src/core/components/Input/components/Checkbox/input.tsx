import React from "react";
import Input from '../../index';
import clsx from "clsx";
import { Props } from './types';


function Checkbox({ label, className, ...otherProps }: Props) {
    const classes = clsx(
        className,
    );

    const input = <Input type="checkbox" className={classes} {...otherProps} />;

    return (
        <>
            {label ? (
                <label>
                    {input}
                    <span>{label}</span>
                </label>
            ) : (
                <>
                    {input}
                </>
            )}
        </>
    );
}

export default Checkbox;
