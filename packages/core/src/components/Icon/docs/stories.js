/** @flow */


import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import icons from '../material-icons/dist/_list';
import Icon from '../index';
import notes from './notes.md';


const stories = storiesOf('Components|Display', module);

stories.addDecorator(withKnobs);

stories.add('Icon', () => {

    const color = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'inherit'], 'primary');
    const size = select('size', ['small', 'medium', 'large', 'inherit'], 'inherit');
    const children = select(
        'children',
        icons,
        icons[0],
    );

    return (
        <div>
            <Icon color={color} size={size}>{children}</Icon>
        </div>
    );

}, { notes: { markdown: notes } });
