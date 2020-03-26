import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import TextField from './index';
import Flag from '@components/Flag';


export default {
    component: TextField,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/TextField',
};


export const Sandbox = (): React.ReactElement => {

    const label = text('label', 'Form Label');
    const placeholder = text('placeholder', 'Some placeholder text');
    const helperText = text('helperText', 'Some helper text');
    const hasError = boolean('hasError', false);
    const isFluid = boolean('isFluid', false);
    const isDisabled = boolean('isDisabled', false);
    const isMultiline = boolean('isMultiline', false);

    return (
        <TextField
            hasError={hasError}
            label={label}
            placeholder={placeholder}
            isDisabled={isDisabled}
            isFluid={isFluid}
            helperText={helperText}
            isMultiline={isMultiline}
        />
    );

};

export const Types = (): React.ReactElement => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '1rem' }}>
        <TextField label="Default (Text)" defaultValue="foobar" />
        <TextField label="Password" type="password" defaultValue="foobar" />
        <TextField label="Search" type="search" defaultValue="foobar" />
        <TextField label="Number" type="number" defaultValue="15" />
        <TextField label="Tel" type="tel" defaultValue="foobar" />
        <TextField label="URL" type="url" defaultValue="foobar" />
    </div>
);

export const HasError = (): React.ReactElement => (
    <TextField
        hasError={true}
        label="Provide the number 4"
        defaultValue="3"
        isReadOnly
        helperText="The value provided is not 4."
    />
);

export const Multiline = (): React.ReactElement => (
    <TextField
        label="This is a multiline input"
        isMultiline
        maxRows={10}
    />
);
