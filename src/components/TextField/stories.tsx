import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';


/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { TextField as Component } from './index';
import styles from './styles';
const TextField = withStyles(styles)(Component)


export default {
    component: TextField,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/TextField',
};


export const Sandbox = (): React.ReactElement => {

    const label = text('label', 'Form Label');
    const placeholder = text('placeholder', 'Some placeholder text');
    const helperText = text('helperText', 'Some helper text');
    const error = boolean('error', false);
    const fullWidth = boolean('fullWidth', false);
    const disabled = boolean('disabled', false);
    const multiline = boolean('multiline', false);

    return (
        <TextField
            error={error}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            fullWidth={fullWidth}
            helperText={helperText}
            multiline={multiline}
        />
    );

};


export const Types = (): React.ReactElement => {

    return (
        <div style={{ display: 'grid', gridGap: '1rem' }}>
            <TextField label="Text" type="text" />
            <TextField label="Password" type="password" />
            <TextField label="Search" type="search" />
            <TextField label="Number" type="number" />
            <TextField
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
            />
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                helperText="Please select your number."
                variant="outlined"
            >
                <MenuItem value="One">One</MenuItem>
                <MenuItem value="Two">Two</MenuItem>
                <MenuItem value="Three">Three</MenuItem>
            </TextField>
        </div>
    );

}


export const Select = (): React.ReactElement => {

    const options = [
        { label: 'one', value: 1 },
        { label: 'two', value: 2 },
        { label: 'three', value: 3 },
        { label: 'four', value: 4 },
    ]

    return (
        <TextField
            defaultValue={2}
            select
            label="Select"
            helperText="Please select your number."
            variant="outlined"
            options={options}
        />
    );

}
