import React from "react";
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';

function Select({ as, children, ...otherProps }: Props) {

    return (
        <InputBase as="select" {...otherProps}>{children}</InputBase>
    );
}

export default Select;
