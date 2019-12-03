import React from "react";
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';

function Radio({ type, ...otherProps }: Props) {

    return (
        <InputBase type="radio" {...otherProps} />
    );
}

export default Radio;
