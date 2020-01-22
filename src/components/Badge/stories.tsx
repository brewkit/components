import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import Badge from './index';
import Button from '../Button';
import Label from "../Label";


export default {
    component: Badge,
    parameters: {
        componentSubtitle: <Label color="success">In Development</Label>,
    },
    title: 'Components|Display/Badge',
};


export const general = (): ReactElement => {
    const content = text('content', 'teste');


    return (
        <React.Fragment>
            <Badge content={content}>
                <Label>Test</Label>
            </Badge>
            <Button>Check it!Check it!Check it!Check it!Check it!Check it!<Badge content={content} /></Button>
        </React.Fragment>
    );
};
