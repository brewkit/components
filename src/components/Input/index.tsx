import React from 'react';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import { Props } from './components/Checkbox/types';
import { InputComponent } from './types';


export const Input: InputComponent = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (
    <Checkbox ref={ref} {...otherProps} />
));


Input.Checkbox = Checkbox;
Input.Radio = Radio;


Input.displayName = 'Input';


export default Input;
