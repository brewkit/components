/** @flow */


import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Popup from '../index';
import Divider from '../../Divider';
import Button from '../../Button';
import notes from './notes.md';


const stories = storiesOf('Components|Display', module);

stories.addDecorator(withKnobs);

stories.add('Popup', () => {

    const position = select('position', ['left', 'right', 'top-center', 'bottom-center', 'top-left', 'top-right', 'bottom-left', 'bottom-right'], 'bottom-left');
    const color = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    const isBlock = boolean('isBlock', false);
    const isConstrained = boolean('isConstrained', false);

    return (
        <React.Fragment>
            <Popup
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
                color={color}
                position={position}
                isBlock={isBlock}
                isConstrained={isConstrained}
            >
                <Button>
                    Hover over me!
                </Button>
            </Popup>

            <Divider>Examples</Divider>

            <Popup
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
                position="right"
                color="info"
                style={{ marginRight: '1rem' }}
            >
                <Button>
                    Right
                </Button>
            </Popup>

            <Popup
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
                position="left"
                color="danger"
                style={{ marginRight: '1rem' }}
            >
                <Button>
                    Left
                </Button>
            </Popup>

            <Popup
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
                position="top-left"
                color="info"
                style={{ marginRight: '1rem' }}
            >
                <Button>
                    top-left
                </Button>
            </Popup>

            <Popup
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
                position="top-center"
                color="warning"
                style={{ marginRight: '1rem' }}
            >
                <Button>
                    top-center
                </Button>
            </Popup>

            <Popup
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
                position="top-right"
                style={{ marginRight: '1rem' }}
            >
                <Button>
                    top-right
                </Button>
            </Popup>

        </React.Fragment>
    );

}, { notes: { markdown: notes } });
