import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { Checkbox as Component } from './Checkbox';
const Checkbox = Component;

export default {
    component: Component,
    title: 'Inputs/Checkbox',
};

const defaultArgs = {
    disabled: false,
    checked: false,
    indeterminate: false,
};

export const Sandbox = (args: any): React.ReactElement => (
    <Checkbox {...args} />
);
Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};

export const General = (): React.ReactElement => (
    <div>
        <Checkbox
            defaultChecked
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Checkbox
            color="secondary"
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        />
        <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Checkbox
            checked
            disabled
            inputProps={{ 'aria-label': 'disabled checked checkbox' }}
        />
        <Checkbox
            defaultChecked
            indeterminate
            inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        <Checkbox
            color="default"
            defaultChecked
            inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
            defaultChecked
            inputProps={{ 'aria-label': 'checkbox with small size' }}
            size="small"
        />
    </div>
);

export const WithLabel = (): React.ReactElement => (
    <div>
        <FormControlLabel
            control={<Checkbox defaultChecked name="checkedA" />}
            label="Primary"
        />
        <FormControlLabel
            control={
                <Checkbox color="secondary" defaultChecked name="checkedA" />
            }
            label="Secondary"
        />
        <FormControlLabel
            control={<Checkbox defaultChecked indeterminate name="checkedA" />}
            label="Indeterminate"
        />
        <FormControlLabel
            control={<Checkbox defaultChecked name="checkedA" />}
            disabled
            label="Disabled Checked"
        />
        <FormControlLabel
            control={<Checkbox name="checkedA" />}
            disabled
            label="Disabled Unchecked"
        />
    </div>
);

export const LabelPlacement = (): React.ReactElement => (
    <div>
        <FormControlLabel
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
            value="top"
        />
        <FormControlLabel
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
            value="start"
        />
        <FormControlLabel
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
            value="bottom"
        />
        <FormControlLabel
            control={<Checkbox />}
            label="End"
            labelPlacement="end"
            value="end"
        />
    </div>
);
