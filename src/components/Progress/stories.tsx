import React, { ReactElement } from 'react';
import Flag from '@components/Flag';
import Progress from './index';


export default {
    component: Progress,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Feedback/Progress',
};


export const General = (): ReactElement => <Progress />;
