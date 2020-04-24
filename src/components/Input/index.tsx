import React from 'react';
import TextField from './components/TextField';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Switch from './components/Switch';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import { Props } from './components/Checkbox/types';
import { InputComponent } from './types';


export const Input: InputComponent = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (
    <TextField ref={ref} {...otherProps} />
));


Input.TextField = TextField;
Input.Select = Select;
Input.Checkbox = Checkbox;
Input.Switch = Switch;
Input.Radio = Radio;
Input.RadioGroup = RadioGroup;


Input.displayName = 'Input';


export default Input;
