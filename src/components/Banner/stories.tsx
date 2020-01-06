import React, { ReactElement } from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Banner from './index';


export default {
    component: Banner,
    title: 'Components|Display/Banner',
};


export const Default = (): ReactElement => {
    const bannerText = text('bannerText', 'Check it');
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'info');
    const icon = text('icon', 'info');
    const infoText = text('infoText', '');
    const variant = select('variant', ['major', 'minor', 'alert'], 'major');
    const isLoading = boolean('isLoading', false);


    return (
        <Banner
            bannerText={bannerText}
            color={color}
            icon={icon}
            infoText={infoText}
            isLoading={isLoading}
            variant={variant}
        />
    );
};
