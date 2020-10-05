import * as React from 'react';
import { select, number } from '@storybook/addon-knobs';
import LinearProgress from '@components/LinearProgress';


export default {
    component: LinearProgress,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Feedback/LinearProgress',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['primary', 'secondary'], 'primary');
    const variant = select('variant', ['determinate', 'indeterminate', 'buffer', 'query'], 'indeterminate');
    const value = number('value', 0);

    return (
        <LinearProgress
            color={color}
            variant={variant}
            value={value}
        />
    );

};


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
            setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
        }
        const timer = setInterval(progress, 1000);
        return () => clearInterval(timer); ;
    }, []);

    return (
        <div style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '1rem' }}>

            <LinearProgress variant="determinate" value={25} />
            <LinearProgress variant="determinate" value={50} />
            <LinearProgress variant="determinate" value={75} />
            <LinearProgress variant="determinate" value={100} />
            <LinearProgress variant="determinate" value={completed} />

        </div>
    )

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

    return <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />;

};
