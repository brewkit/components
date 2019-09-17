import React from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import Popup from './index';
import Button from '../Button';


export default {
    title: 'Components|Display/Popup',
    component: Popup,
};


export const General = () => {
    const position = select('position', ['left', 'right', 'top-center', 'bottom-center', 'top-left', 'top-right', 'bottom-left', 'bottom-right'], 'right');
    const color = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    const isBlock = boolean('isBlock', false);
    const isConstrained = boolean('isConstrained', false);

    return (
        <Popup
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
            color={color}
            position={position}
            isBlock={isBlock}
            isConstrained={isConstrained}
        >
            <Button>Hover over me!</Button>
        </Popup>
    );
};



export const Unconstrained = () => (
    <Popup content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla." position="bottom-left">
        <Button>Hover over me!</Button>
    </Popup>
);
export const Constrained = () => (
    <Popup content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla." position="bottom-left" isConstrained>
        <Button>Hover over me!</Button>
    </Popup>
);
export const IsBlock = () => (
    <Popup content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla." position="bottom-left" isBlock>
        <Button>Hover over me!</Button>
    </Popup>
);