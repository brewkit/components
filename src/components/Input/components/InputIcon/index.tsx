import React, { ReactElement } from 'react';
import Icon from '../../../Icon';
import { Props } from './types';


function InputIcon({
    className,
    color,
    variant,
    ...otherProps
}: Props): ReactElement {

    return (
        <Icon className={className} color={color} size="medium" {...otherProps}>
            {variant}
        </Icon>
    );

}


export default InputIcon;
