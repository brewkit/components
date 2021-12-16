import * as React from 'react';
import { select, number } from '@storybook/addon-knobs';
import LinearProgress from '@components/LinearProgress/LinearProgress';

export default {
    component: LinearProgress,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Feedback/LinearProgress',
};

const args = {
    color: select('color', ['primary', 'secondary'], 'primary'),
    variant: select(
        'variant',
        ['determinate', 'indeterminate', 'buffer', 'query'],
        'indeterminate',
    ),
    value: number('value', 0),
};

export const Sandbox = (): React.ReactElement => <LinearProgress {...args} />;

export const Indeterminate = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '1rem' }}>
        <LinearProgress />
        <LinearProgress color="primary" />
        <LinearProgress color="secondary" />
    </div>
);

export const Determinate = (): React.ReactElement => {
    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
        function progress() {
            setCompleted((prevCompleted) =>
                prevCompleted >= 100 ? 0 : prevCompleted + 10,
            );
        }
        const timer = setInterval(progress, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '1rem' }}>
            <LinearProgress value={25} variant="determinate" />
            <LinearProgress value={50} variant="determinate" />
            <LinearProgress value={75} variant="determinate" />
            <LinearProgress value={100} variant="determinate" />
            <LinearProgress value={completed} variant="determinate" />
        </div>
    );
};

export const Buffer = (): React.ReactElement => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const progressRef = React.useRef(() => {});

    React.useEffect(() => {
        progressRef.current = () => {
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
        return () => clearInterval(timer);
    }, []);

    return (
        <LinearProgress
            value={progress}
            valueBuffer={buffer}
            variant="buffer"
        />
    );
};
