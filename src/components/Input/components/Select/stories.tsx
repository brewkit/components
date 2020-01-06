import React, { ReactElement } from 'react';
import Select from './index';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Select,
    title: 'Components|User Input/Input/Select',
};


export const Default = (): ReactElement => {

    return (
        <Select>
            <option>option 1</option>
            <option>option 2</option>
        </Select>
    );
};
