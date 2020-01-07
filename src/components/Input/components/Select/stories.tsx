import React, { ReactElement } from 'react';
import Select from './index';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Select,
    title: 'Components|User Input/Input/Select',
};


export const Default = (): ReactElement => {

    return (
        <Select value="option 2">
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
            <option>option 4</option>
            <option>option 5</option>
            <option>option 6</option>
        </Select>
    );
};
