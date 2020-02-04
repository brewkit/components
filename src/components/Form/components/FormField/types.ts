import React from 'react';
import { Props as InputProps } from '../../../Input/types';


export interface Props extends InputProps {
    hasError?: boolean,
    helperText?: string,
    label?: React.ReactNode,
    className?: string,
    validation?: any,
    name?: string,
    onBlur?: (event?: Event) => void,
}
