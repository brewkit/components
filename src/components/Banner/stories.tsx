import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import Banner from './index';


export default {
    component: Banner,
    title: 'Components|Display/Banner',
};


export const Default = (): ReactElement => {
    const bannerText = text('bannerText', 'Hi, Hello, Good Day');
    const icon = text('icon', 'info');
    const infoText = text('infoText', '');
    return (
        <Banner bannerText={bannerText} color="info" icon={icon} infoText={infoText} />
    );
};
