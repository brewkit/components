import React from 'react';
import Flag from '@components/Flag';
import Progress from './index';


export default {
    component: Progress,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Input',
};


export const General = (): React.ReactElement => <Progress />;
