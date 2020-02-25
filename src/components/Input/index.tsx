import React from 'react';
import Checkbox from './components/Checkbox';
import { Props } from './components/Checkbox/types';
import { InputComponent } from './types';


export const Input: InputComponent = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (
    <Checkbox ref={ref} {...otherProps} />
));


Input.Checkbox = Checkbox;


Input.displayName = 'Input';


export default Input;
