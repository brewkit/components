import React, { ReactElement } from 'react';
import Select from './index';
// import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Select,
    title: 'Components|User Input/Input/Select',
};


export const Default = (): ReactElement => (


    <Select defaultValue="2">
        <option value="1">option 1</option>
        <option disabled value="2">option 2</option>
        <option value="3">option 3</option>
    </Select>


);


export const Overflow = (): ReactElement => (

    
    <Select value="option 2">
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
        <option value="4">option 4</option>
        <option value="5">option 5</option>
        <option value="6">option 6</option>
    </Select>


);
