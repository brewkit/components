import React, { ReactElement } from 'react';
import RadioGroup from '../../../RadioGroup';
import Radio from './index';
import Label from '../../../../../Label';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input/RadioGroup/Radio',
};


export const Default = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const fullWidth = boolean('fullWidth', false);
    const inputLabel = text('inputLabel', 'Pick an option:');
    const radioSetName = text('radioSetName', 'testing');
    const optionName1 = text('optionName1', 'testing1');
    const optionName2 = text('optionName2', 'testing2');

    return (
        <RadioGroup inputLabel={inputLabel}>
            <Radio
                name={radioSetName}
                inputLabel={optionName1}
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                readOnly
            />
            <Radio
                name={radioSetName}
                inputLabel={optionName2}
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                readOnly
            />
        </RadioGroup>

    );
};
