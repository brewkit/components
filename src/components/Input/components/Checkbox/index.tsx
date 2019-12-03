import React from "react";
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';


function Checkbox({ type, ...otherProps }: Props) {

    return (
        <InputBase type="checkbox" {...otherProps} />
    );
}

export default Checkbox;
