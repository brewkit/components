import * as React from 'react';
import { text, select, boolean, number } from '@storybook/addon-knobs';
import CircularProgress from '@components/CircularProgress/CircularProgress';

export default {
    component: CircularProgress,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Feedback/CircularProgress',
};

const args = {
    color: select('color', ['primary', 'secondary', 'inherit'], 'primary'),
    variant: select(
        'variant',
        ['determinate', 'indeterminate', 'static'],
        'indeterminate',
    ),
    disableShrink: boolean('disableShrink', false),
    layered: boolean('layered', true),
    size: text('size', '2rem'),
    thickness: number('thickness', 4),
    value: number('value', 0),
};

export const Sandbox = (): React.ReactElement => <CircularProgress {...args} />;

export const Indeterminate = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <CircularProgress layered={false} />
        <CircularProgress color="primary" layered={false} />
        <CircularProgress color="secondary" layered={false} />
        <CircularProgress color="inherit" layered={false} />
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

        return () => {
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
            <CircularProgress value={25} variant="static" />
            <CircularProgress value={50} variant="static" />
            <CircularProgress value={75} variant="static" />
            <CircularProgress value={100} variant="static" />
            <CircularProgress value={completed} variant="static" />
        </div>
    );
};

export const Layered = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <CircularProgress layered />
        <CircularProgress color="primary" layered />
        <CircularProgress color="secondary" layered />
        <CircularProgress color="inherit" layered />
    </div>
);
