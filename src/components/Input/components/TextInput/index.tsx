import React from 'react';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';

function TextInput({
    as = 'input',
    type = 'text',
    error = false,
    className = '',
    ...otherProps
}: Props) {
    return (
        <InputBase as={as} type={type} error={error} {...otherProps} />
    );
}

export default TextInput;
