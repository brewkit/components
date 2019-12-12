import * as React from 'react';
import Icon from '../../../Icon';

function InputIcon({ className, color, variant, ...otherProps }) {
    return (
        <Icon className={className} color={color} size="medium" {...otherProps}>{variant}</Icon>
    );
}

export default InputIcon;