import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from './TextField';

export default {
    component: TextField,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/TextField',
};

const defaultArgs = {
    disabled: false,
    error: false,
    fullWidth: false,
    helperText: 'Some helper text',
    label: 'Form Label',
    multiline: false,
    placeholder: 'Some placeholder text',
};

export const Sandbox = (args: any): React.ReactElement => (
    <TextField {...args} />
);
Sandbox.args = {
    ...defaultArgs,
};

export const Types = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <TextField label="Text" type="text" />
        <TextField label="Password" type="password" />
        <TextField label="Search" type="search" />
        <TextField label="Number" type="number" />
        <TextField
            defaultValue="Default Value"
            label="Multiline"
            multiline
            rows={4}
        />
        <TextField
            helperText="Please select your number."
            id="outlined-select-currency"
            label="Select"
            select
            variant="outlined">
            <MenuItem value="One">One</MenuItem>
            <MenuItem value="Two">Two</MenuItem>
            <MenuItem value="Three">Three</MenuItem>
        </TextField>
    </div>
);

export const Select = (): React.ReactElement => {
    const options = [
        { label: '', value: '', hidden: true },
        { label: 'one', value: 1 },
        { label: 'two', value: 2 },
        { label: 'three', value: 3 },
        { label: 'four', value: 4 },
    ];

    return (
        <TextField
            defaultValue=""
            helperText="Please select your number."
            label="Select"
            options={options}
            select
            variant="outlined"
        />
    );
};
