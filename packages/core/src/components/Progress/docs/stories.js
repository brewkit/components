/** @flow */


import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Progess from '../index';
import notes from './notes.md';


const stories = storiesOf('Components|Feedback', module);

stories.addDecorator(withKnobs);

stories.add('Progress', () => {

    const variant = select('variant', ['circular', 'horizontal'], 'horizontal');
    const color = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'], 'primary');
    const size = select('size', ['small', 'medium', 'large'], 'medium');

    return (
        <Progess
            variant={variant}
            color={color}
            size={size}
        />
    );

}, { notes: { markdown: notes } });
