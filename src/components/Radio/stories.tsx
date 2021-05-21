import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import Radio from '@components/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default {
    component: Radio,
    parameters: {
        jest: ['Radio.test']
    },
    title: 'Inputs/Radio',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['default', 'primary', 'secondary'], 'default');
    const disabled = boolean('disabled', false);

    return (
        <Radio
            color={color}
            disabled={disabled}
        />
    );

};


export const WithLabel = (): React.ReactElement => {

    return (
        <div>
            <FormControlLabel
                control={<Radio defaultChecked name="checkedA" color="primary" />}
                label="Primary"
            />
            <FormControlLabel
                control={<Radio defaultChecked name="checkedA" color="secondary" />}
                label="Secondary"
            />
            <FormControlLabel
                control={<Radio defaultChecked name="checkedA" color="primary" />}
                disabled
                label="Disabled Checked"
            />
            <FormControlLabel
                control={<Radio name="checkedA" />}
                disabled
                label="Disabled Unchecked"
            />
        </div>
    );

}


export const LabelPlacement = (): React.ReactElement => {

    return (
        <div>
            <FormControlLabel
                value="top"
                control={<Radio />}
                label="Top"
                labelPlacement="top"
            />
            <FormControlLabel
                value="start"
                control={<Radio />}
                label="Start"
                labelPlacement="start"
            />
            <FormControlLabel
                value="bottom"
                control={<Radio />}
                label="Bottom"
                labelPlacement="bottom"
            />
            <FormControlLabel
                value="end"
                control={<Radio />}
                label="End"
                labelPlacement="end"
            />
        </div>
    );

}
