import React, { ReactElement } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Label from '../Label';
import Card from '../Card';
import Placeholder from './index';
import { Variants } from './components/PlaceholderAction/types';


export default {
    component: Placeholder,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Placeholder',
};


export const General = (): ReactElement => {
    const errorGraphic: string = text('graphic', 'business');
    const title: string = text('title', 'No Content Found');
    const description: string = text('description', 'Action needs to be taken in order to see content here.');

    return (
        <Placeholder>
            <Placeholder.Graphic graphic={errorGraphic} />
            <Placeholder.Title>{title}</Placeholder.Title>
            <Placeholder.Content>{description}</Placeholder.Content>
        </Placeholder>
    );
};


export const WithAction = (): ReactElement => {
    const childGraphic: string = text('graphic', 'business');
    const title: string = text('title', 'No content to display');
    const description: string = text('description', 'Please add new content to continue');
    const variant: Variants = select('variant', ['primary', 'secondary'], 'secondary');

    return (
        <Placeholder>
            <Placeholder.Graphic graphic={childGraphic} />
            <Placeholder.Title>{title}</Placeholder.Title>
            <Placeholder.Content>{description}</Placeholder.Content>
            <Placeholder.Action onClick={() => console.log('clicked')}>
                Primary Action
            </Placeholder.Action>
            <Placeholder.Action onClick={() => console.log('clicked')} variant={variant}>
                Secondary Action
            </Placeholder.Action>
        </Placeholder>
    );
};


export const FullCustom = (): ReactElement => {
    const title: string = text('title', 'Custom Header');
    const body: string = text('body', 'This is a custom body describing a custom experience with other components');

    return (
        <Placeholder>
            <Card>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Body>{body}</Card.Body>
            </Card>
        </Placeholder>
    );
};

