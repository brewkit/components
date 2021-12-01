import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { select, boolean } from '@storybook/addon-knobs';
import { withStyles } from '@material-ui/core/styles';


/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { Checkbox as Component } from './Checkbox';
import styles from './styles';
const Checkbox = withStyles(styles)(Component)


export default {
    component: Component,
    title: 'Inputs/Checkbox',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['default', 'primary', 'secondary'], 'default');
    const disabled = boolean('disabled', false);

    return (
        <Checkbox
            color={color}
            disabled={disabled}
        />
    );

};


export const General = (): React.ReactElement => {

    return (
        <div>
            <Checkbox
                defaultChecked
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Checkbox color="secondary" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
            <Checkbox
                defaultChecked
                indeterminate
                inputProps={{ 'aria-label': 'indeterminate checkbox' }}
            />
            <Checkbox
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <Checkbox
                defaultChecked
                size="small"
                inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
        </div>
    );

}


export const WithLabel = (): React.ReactElement => {

    return (
        <div>
            <FormControlLabel
                control={<Checkbox defaultChecked name="checkedA" />}
                label="Primary"
            />
            <FormControlLabel
                control={<Checkbox defaultChecked name="checkedA" color="secondary" />}
                label="Secondary"
            />
            <FormControlLabel
                control={<Checkbox defaultChecked name="checkedA" indeterminate />}
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

}


export const LabelPlacement = (): React.ReactElement => {

    return (
        <div>
            <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Top"
                labelPlacement="top"
            />
            <FormControlLabel
                value="start"
                control={<Checkbox />}
                label="Start"
                labelPlacement="start"
            />
            <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="Bottom"
                labelPlacement="bottom"
            />
            <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="End"
                labelPlacement="end"
            />
        </div>
    );

}
