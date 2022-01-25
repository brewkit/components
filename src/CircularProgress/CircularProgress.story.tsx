
import * as React from 'react';
import { Story } from '@storybook/react';

import CircularProgress from './CircularProgress';
import { Props as CircularProgressProps } from './CircularProgress.types';

export default {
    component: CircularProgress,
    title: 'Feedback/CircularProgress',
};

const defaultArgs = {
    disableShrink: false,
    layered: false,
    size: '2rem',
    thickness: 4,
    value: 0,
};

export const Sandbox: Story<CircularProgressProps> = (args) => (
    <CircularProgress {...args} />
);

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
    variant: 'indeterminate',
};

export const Indeterminate: Story<CircularProgressProps> = (args) => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <CircularProgress {...args} />
        <CircularProgress {...args} color="primary" />
        <CircularProgress {...args} color="secondary" />
        <CircularProgress {...args} color="inherit" />
    </div>
);

Indeterminate.args = {
    ...defaultArgs,
    variant: 'indeterminate',
};

export const Determinate: Story<CircularProgressProps> = (args) => {
    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
        const progress = (): void => {
            setCompleted((prevCompleted) => prevCompleted >= 100 ? 0 : prevCompleted + 10);
        };

        const timer = setInterval(progress, 1000);

        return (): void => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div
            style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridGap: '1rem',
            }}>
            <CircularProgress {...args} value={25} variant="determinate" />
            <CircularProgress {...args} value={50} variant="determinate" />
            <CircularProgress {...args} value={75} variant="determinate" />
            <CircularProgress {...args} value={100} variant="determinate" />
            <CircularProgress
                {...args}
                value={completed}
                variant="determinate"
            />
        </div>
    );
};

Determinate.args = {
    ...defaultArgs,
};

export const Layered: Story<CircularProgressProps> = (args) => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <CircularProgress {...args} layered />
        <CircularProgress {...args} color="primary" layered />
        <CircularProgress {...args} color="secondary" layered />
        <CircularProgress {...args} color="inherit" layered />
    </div>
);

Layered.args = {
    ...defaultArgs,
};
