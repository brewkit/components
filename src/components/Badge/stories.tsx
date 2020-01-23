import React, { ReactElement } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Badge from './index';
import Button from '../Button';
import Label from '../Label';
import Typography from '../Typography';


export default {
    component: Badge,
    parameters: {
        componentSubtitle: <Label color="success">In Development</Label>,
    },
    title: 'Components|Display/Badge',
};


export const general = (): ReactElement => {
    const content = text('content', '5');
    const isCircular = boolean('isCircular', false);
    const anchorFrom = select('anchorFrom', ['top-right', 'top-left', 'bottom-right', 'bottom-left'], 'top-right');
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'danger');


    return (
        <Badge anchorFrom={anchorFrom} color={color} content={content} isCircular={isCircular}>
            <Label>Test</Label>
        </Badge>
    );
};


export const inline = (): ReactElement => {
    const content = text('content', 'inline');
    const isCircular = boolean('isCircular', false);
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'danger');


    return (
        <div>
            <Button>
                Check it!Check it!Check it!Check it!Check it!Check it!
                <Badge content={content} color={color} isCircular={isCircular} />
            </Button>
            <br />
            <br />
            <Typography>Typography <Badge content={content} isCircular={isCircular} /></Typography>
            <br />
            <br />
            <div>Regular Div <Badge content={content} isCircular={isCircular} /></div>
        </div>
    );
};
