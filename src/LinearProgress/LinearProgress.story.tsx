import * as React from 'react';
import { Story } from '@storybook/react';
import LinearProgress, {
    BkLinearProgressProps as LinearProgressProps,
} from '.';

export default {
    component: LinearProgress,
    title: 'Feedback/LinearProgress',
};

const defaultArgs = {
    value: 0,
};

export const Sandbox: Story<LinearProgressProps> = (args) => (
    <LinearProgress {...args} />
);

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
    variant: 'indeterminate',
};

export const Indeterminate: Story<LinearProgressProps> = (args) => (
    <div style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '1rem' }}>
        <LinearProgress {...args} />
        <LinearProgress {...args} color="primary" />
        <LinearProgress {...args} color="secondary" />
    </div>
);

Indeterminate.args = {
    ...defaultArgs,
    variant: 'indeterminate',
};

export const Determinate: Story<LinearProgressProps> = (args) => {
    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
        const progress = (): void => {
            setCompleted((prevCompleted) =>
                prevCompleted >= 100 ? 0 : prevCompleted + 10,
            );
        };

        const timer = setInterval(progress, 1000);

        return (): void => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '1rem' }}>
            <LinearProgress {...args} value={25} variant="determinate" />
            <LinearProgress {...args} value={50} variant="determinate" />
            <LinearProgress {...args} value={75} variant="determinate" />
            <LinearProgress {...args} value={100} variant="determinate" />
            <LinearProgress {...args} value={completed} variant="determinate" />
        </div>
    );
};

Determinate.args = {
    ...defaultArgs,
};

export const Buffer: Story<LinearProgressProps> = (args) => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const progressRef = React.useRef(() => {
        // nothing to see here
    });

    React.useEffect(() => {
        progressRef.current = (): void => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => progressRef.current(), 500);
        return (): void => clearInterval(timer);
    }, []);

    return (
        <LinearProgress
            {...args}
            value={progress}
            valueBuffer={buffer}
            variant="buffer"
        />
    );
};
