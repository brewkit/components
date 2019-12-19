import React, { ReactElement } from 'react';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';


function Select({
    children,
    ...otherProps
}: Props): ReactElement {

    return (
        <InputBase as="select" {...otherProps}>
            {children}
        </InputBase>
    );

}


export default Select;
