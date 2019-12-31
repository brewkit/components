import React, { ReactElement } from 'react';
import Radio from './index';
import RadioGroup from '../../../RadioGroup';
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
    const inputLabel = text('inputLabel', 'Radio label');
    return (
        <Radio
            checked={checked}
            disabled={disabled}
            fullWidth={fullWidth}
            inputLabel={inputLabel}
            readOnly
        />
    );
};


export const RadioGrouping = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const fullWidth = boolean('fullWidth', false);
    const groupInputLabel = text('groupInputLabel', 'This is a group:');
    const radioInputLabel = text('radioInputLabel', 'Radio label');
    const radioName = text('radioName', 'testing');
    return (
        <RadioGroup inputLabel={groupInputLabel}>
            <Radio
                name={radioName}
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel={radioInputLabel}
                readOnly
            />
            <Radio
                name={radioName}
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel={radioInputLabel}
                readOnly
            />
        </RadioGroup>
    );
};
