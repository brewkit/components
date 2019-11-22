import React from "react";
import Input from './index';
import Label from "../Label";

export default {
    title: 'Components|User Input/Input',
    component: Input,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const General = () => {
    // const align: Alignments = select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit');

    //
    // const color: Colors = select('color', ['initial', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'info', 'danger'], 'initial');
    // const display: Displays = select('display', ['initial', 'block', 'inline', 'inline-block'], 'initial');
    // const hasBottomMargin = boolean('hasBottomMargin', true);
    // const shouldTruncate = boolean('shouldTruncate', false);
    // const variant: Variants = select('variant', ['h1', 'h2', 'h3', 'body1', 'body2', 'label', 'inherit'], 'h1');

    return (
        <Input
            type="text"
        />
    );
};
