/** @flow */


import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../index';
import notes from './notes.md';


const stories = storiesOf('Components|User Input', module);

stories.addDecorator(withKnobs);

stories.add('Button', () => {

    const children = text('children', 'Click me!');
    const variant = select('variant', ['standard', 'icon'], 'standard');
    const color = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'], 'primary');
    const size = select('size', ['small', 'medium', 'large'], 'medium');
    const isLoading = boolean('isLoading', false);
    const isCompact = boolean('isCompact', false);
    const isFluid = boolean('isFluid', false);
    const isCircular = boolean('isCircular', false);
    const disabled = boolean('disabled', false);

    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            isCompact={isCompact}
            isFluid={isFluid}
            isCircular={isCircular}
            isLoading={isLoading}
            disabled={disabled}
            onClick={action('button-click')}
        >
            {children}
        </Button>
    );

}, { notes: { markdown: notes } });
