import * as React from 'react';
import { text, select, boolean, number } from '@storybook/addon-knobs';
import CircularProgress from '@components/CircularProgress';


export default {
    component: CircularProgress,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Feedback/CircularProgress',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['primary', 'secondary', 'inherit'], 'primary');
    const variant = select('variant', ['determinate', 'indeterminate', 'static'], 'indeterminate');
    const disableShrink = boolean('disableShrink', false);
    const layered = boolean('layered', true);
    const size = text('size', '2rem');
    const thickness = number('thickness', 4);
    const value = number('value', 0);

    return (
        <CircularProgress
            color={color}
            variant={variant}
            disableShrink={disableShrink}
            size={size}
            thickness={thickness}
            value={value}
            layered={layered}
        />
    );

};


export const Indeterminate = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>

        <CircularProgress layered={false} />
        <CircularProgress layered={false} color="primary" />
        <CircularProgress layered={false} color="secondary" />
        <CircularProgress layered={false} color="inherit" />

    </div>
);


export const Determinate = (): React.ReactElement => {


    const [completed, setCompleted] = React.useState(0);


    React.useEffect(() => {
        function progress() {
            setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
        }

        const timer = setInterval(progress, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>

            <CircularProgress variant="static" value={25} />
            <CircularProgress variant="static" value={50} />
            <CircularProgress variant="static" value={75} />
            <CircularProgress variant="static" value={100} />
            <CircularProgress variant="static" value={completed} />

        </div>
    )

};


export const Layered = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>

        <CircularProgress layered />
        <CircularProgress layered color="primary" />
        <CircularProgress layered color="secondary" />
        <CircularProgress layered color="inherit" />

    </div>
);
