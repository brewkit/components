import React   from 'react';
import { number } from '@storybook/addon-knobs';
import Label from "../Label";
import Tabs, { Tab } from './index';


export default {
    title: 'Components|Display/Tabs',
    component: Tabs,
    parameters: {
        componentSubtitle: <Label color="warning">In Progress</Label>,
    },
};


export const General = () => {
    const tabs = [...Array(3)];
    const activeIndex = number('Active Index', 0, { range: true, min: 0, max: tabs.length - 1, step: 1 });
    return (
        <Tabs>
            {tabs.map((tab, i) => (
                <Tab isActive={activeIndex === i}>Item {(i + 1).toString()}</Tab>
            ))}
        </Tabs>
    );
};


// export const Default = () => <Button>Default</Button>;
// export const Standard = () => <Button variant="standard">Click me!</Button>;
// export const Icon = () => <Button variant="icon">360</Button>;
// export const Circular = () => <Button variant="icon" isCircular>add</Button>;
// export const Loading = () => <Button variant="standard" isLoading>Click me!</Button>;
// export const Fluid = () => <Button variant="standard" isFluid>Click me!</Button>;
// export const Compact = () => <Button variant="standard" isCompact>Click me!</Button>;
// export const Disabled = () => <Button variant="standard" disabled>Click me!</Button>;
