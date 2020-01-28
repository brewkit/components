import React, { ReactElement } from 'react';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Select from './components/Select';
import Switch from './components/Switch';
import InputIcon from './components/InputIcon';
import { Props } from './types';


/**
 * The `<Input />` component serves as a simple abstraction for more specific types of input components.
 */
function Input({
    variant = 'text',
    formRef,
    ...otherProps
}: Props): ReactElement {


    /* Map our input components for easier access */
    const components = {
        checkbox: Checkbox,
        radio: Radio,
        select: Select,
        text: TextInput,
        textarea: Textarea,
    };


    const Element = components[variant] || TextInput;


    return <Element formRef={formRef} {...otherProps} />;


}


Input.Checkbox = Checkbox;
Input.Icon = InputIcon;
Input.Radio = Radio;
Input.RadioGroup = RadioGroup;
Input.Select = Select;
Input.Switch = Switch;
Input.Textarea = Textarea;
Input.TextInput = TextInput;


export default Input;
