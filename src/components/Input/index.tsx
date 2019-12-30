import React, { ReactElement } from 'react';
import Checkbox from './components/Checkbox';
import Radio from './components/RadioGroup/components/Radio';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import InputIcon from './components/InputIcon';
import { Props } from './types';


/**
 * The `<Input />` component serves as a simple abstraction for more specific types of input components.
 */
function Input({
    variant = 'text',
    ...otherProps
}: Props): ReactElement {


    /* Map our input components for easier access */
    const components = {
        checkbox: Checkbox,
        radio: Radio,
        text: TextInput,
        textarea: Textarea,
    };

    const Element = components[variant] || TextInput;


    return <Element {...otherProps} />;


}


Input.Icon = InputIcon;


export default Input;
