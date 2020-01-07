import React, { ReactElement } from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Banner from './index';


export default {
    component: Banner,
    title: 'Components|Display/Banner',
};


export const Default = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'danger');
    const iconName = text('icon', 'block');
    const variant = select('variant', ['major', 'minor', 'alert'], 'major');
    const isLoading = boolean('isLoading', false);
    const title = text('title', 'INTERNET DOWN');
    const info = text('info', '');


    return (
        <Banner
            color={color}
            iconName={iconName}
            info={info}
            isLoading={isLoading}
            title={title}
            variant={variant}
        />
    );
};


export const withInfoText = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'info');
    const iconName = text('icon', 'info');
    const variant = select('variant', ['major', 'minor', 'alert'], 'major');
    const isLoading = boolean('isLoading', false);
    const title = text('title', 'whats new');
    const info = text('info', 'nuttin');


    return (
        <Banner
            color={color}
            iconName={iconName}
            info={info}
            isLoading={isLoading}
            title={title}
            variant={variant}
        />
    );
};


export const alert = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'warning');
    const iconName = text('icon', 'warning');
    const variant = select('variant', ['major', 'minor', 'alert'], 'alert');
    const isLoading = boolean('isLoading', false);
    const title = text('title', 'WHYYYYYYyyyYyyYYyyyyYYY');
    const info = text('info', '');


    return (
        <Banner
            color={color}
            iconName={iconName}
            info={info}
            isLoading={isLoading}
            title={title}
            variant={variant}
        />
    );
};


export const withButton = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'danger');
    const iconName = text('icon', 'backup');
    const variant = select('variant', ['major', 'minor', 'alert'], 'alert');
    const isLoading = boolean('isLoading', false);
    const title = text('title', 'Update Required');
    const info = text('info', 'You must update or fail');


    return (
        <Banner
            color={color}
            iconName={iconName}
            info={info}
            isLoading={isLoading}
            title={title}
            variant={variant}
        >
            <Banner.Footer>
                <Banner.Button size="small">update</Banner.Button>
            </Banner.Footer>
        </Banner>
    );
};


export const withTwoButtons = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'info');
    const iconName = text('icon', 'info');
    const variant = select('variant', ['major', 'minor', 'alert'], 'minor');
    const isLoading = boolean('isLoading', false);
    const title = text('title', 'OvrC 2.0');
    const info = text('info', 'We recently updated our application, it runs better!!');


    return (
        <Banner
            color={color}
            iconName={iconName}
            info={info}
            isLoading={isLoading}
            title={title}
            variant={variant}
        >
            <Banner.Footer>
                <Banner.Button size="medium" variant="text">dismiss</Banner.Button>
                <Banner.Button size="medium">learn more</Banner.Button>
            </Banner.Footer>
        </Banner>
    );
};
