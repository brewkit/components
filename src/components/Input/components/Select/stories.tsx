import React from 'react';
import Select from './index';
import Flag from '@components/Flag';


export default {
    component: Select,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Select',
};


export const Sandbox = (): React.ReactElement => {

    return (
        <Select
            options={[
                { value: 10, label: 'Ten' },
                { value: 20, label: 'Twenty' },
                { value: 30, label: 'Thirty' },
                { value: 40, label: 'Forty' },
            ]}
        />
    );

};
