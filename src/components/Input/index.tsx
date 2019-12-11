import React from 'react';
import InputBase from './components/InputBase';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
// import Select from './components/Select';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import InputIcon from './components/InputIcon';
import { Props } from './types';

const components = {
    checkbox: Checkbox,
    radio: Radio,
    text: TextInput,
    textarea: Textarea,
};

function Input({ variant = 'text', ...otherProps }: Props) {

    const Element = components[variant] || TextInput;

    return <Element {...otherProps} />;
}

Input.Icon = InputIcon;

export default Input;