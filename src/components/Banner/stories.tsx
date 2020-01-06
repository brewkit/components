import React, { ReactElement } from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Banner from './index';


export default {
    component: Banner,
    title: 'Components|Display/Banner',
};


export const Default = (): ReactElement => {
    //   const bannerText = text('bannerText', 'Check it');
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'info');
    const iconName = text('icon', 'info');
    const variant = select('variant', ['major', 'minor', 'alert'], 'major');
    const isLoading = boolean('isLoading', false);


    return (
        <Banner
            color={color}
            iconName={iconName}
            isLoading={isLoading}
            variant={variant}
        >
            <Banner.Icon iconName="info" isLoading={isLoading} />
            <Banner.Body>
                <Banner.Title>Hello</Banner.Title>
                <Banner.Info>This is some helper text</Banner.Info>
            </Banner.Body>
        </Banner>
    );
};
