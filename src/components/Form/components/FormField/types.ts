import { ReactElement } from 'react';
import { Props as InputProps } from '../../../Input/types';


export interface Props extends InputProps {
    error?: boolean,
    helperText?: string,
    label?: ReactElement,
    className?: string,
    children?: ReactElement,
    validation?: any,
    name?: string,
    onBlur?: (event?: Event) => void,
}
