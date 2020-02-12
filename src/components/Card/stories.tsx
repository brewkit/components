import React, { ReactElement, ReactNode } from 'react';
import { text } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Card from './index';


export default {
    component: Card,
    parameters: {
        componentSubtitle: <Flag color="warning">In Progress</Flag>,
    },
    title: 'Components|Display/Card',
};


export const BaseExample = (): ReactElement => {
    const children: ReactNode = text('children', 'Click me!');
    return (
        <Card>
            <Card.Header>
                <Card.Title>Card Header</Card.Title>
            </Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};


export const CardExample = (): ReactElement => <Card>Lorem Ipsum</Card>;
export const CardBodyExample = (): ReactElement => <Card.Body>Lorem Ipsum</Card.Body>;
export const CardHeaderExample = (): ReactElement => <Card.Header>Lorem Ipsum</Card.Header>;
export const CardTitleExample = (): ReactElement => <Card.Title>Lorem Ipsum</Card.Title>;
