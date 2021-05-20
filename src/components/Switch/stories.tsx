import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import Switch from '@components/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default {
    component: Switch,
    parameters: {
        jest: ['Switch.test']
    },
    title: 'Inputs/Switch',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['default', 'primary', 'secondary'], 'default');
    const disabled = boolean('disabled', false);

    return (
        <Switch
            color={color}
            disabled={disabled}
        />
    );

};


export const WithLabel = (): React.ReactElement => {

    return (
        <div>
            <FormControlLabel
                control={<Switch defaultChecked name="checkedA" color="primary" />}
                label="Primary"
            />
            <FormControlLabel
                control={<Switch defaultChecked name="checkedA" color="secondary" />}
                label="Secondary"
            />
            <FormControlLabel
                control={<Switch defaultChecked name="checkedA" color="primary" />}
                disabled
                label="Disabled Checked"
            />
            <FormControlLabel
                control={<Switch name="checkedA" />}
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
                control={<Switch />}
                label="Top"
                labelPlacement="top"
            />
            <FormControlLabel
                value="start"
                control={<Switch />}
                label="Start"
                labelPlacement="start"
            />
            <FormControlLabel
                value="bottom"
                control={<Switch />}
                label="Bottom"
                labelPlacement="bottom"
            />
            <FormControlLabel
                value="end"
                control={<Switch />}
                label="End"
                labelPlacement="end"
            />
        </div>
    );

}
