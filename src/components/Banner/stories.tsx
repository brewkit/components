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
    const title = text('Banner.Title', 'INTERNET DOWN');


    return (
        <Banner
            color={color}
            variant={variant}
        >
            <Banner.Icon iconName={iconName} isLoading={isLoading} />
            <Banner.Body>
                <Banner.Title>{title}</Banner.Title>
            </Banner.Body>
        </Banner>
    );
};


export const withInfoText = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'info');
    const iconName = text('icon', 'info');
    const variant = select('variant', ['major', 'minor', 'alert'], 'major');
    const isLoading = boolean('isLoading', false);
    const title = text('Banner.Title', 'Hello');
    const info = text('Banner.Info', 'This is some information!');


    return (
        <Banner
            color={color}
            variant={variant}
        >
            <Banner.Icon iconName={iconName} isLoading={isLoading} />
            <Banner.Body>
                <Banner.Title>{title}</Banner.Title>
                <Banner.Info>{info}</Banner.Info>
            </Banner.Body>
        </Banner>
    );
};


export const alert = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'warning');
    const iconName = text('icon', 'warning');
    const variant = select('variant', ['major', 'minor', 'alert'], 'alert');
    const isLoading = boolean('isLoading', false);
    const title = text('Banner.Title', 'Hello');
    const info = text('Banner.Info', 'This is some information!');


    return (
        <Banner
            color={color}
            variant={variant}
        >
            <Banner.Icon iconName={iconName} isLoading={isLoading} />
            <Banner.Body>
                <Banner.Title>{title}</Banner.Title>
                <Banner.Info>{info}</Banner.Info>
            </Banner.Body>
        </Banner>
    );
};


export const withButton = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'danger');
    const iconName = text('icon', 'backup');
    const variant = select('variant', ['major', 'minor', 'alert'], 'alert');
    const isLoading = boolean('isLoading', false);
    const title = text('Banner.Title', 'Hello');
    const info = text('Banner.Info', 'This is some information!');


    return (
        <Banner
            color={color}
            variant={variant}
        >
            <Banner.Icon iconName={iconName} isLoading={isLoading} />
            <Banner.Body>
                <Banner.Title>{title}</Banner.Title>
                <Banner.Info>{info}</Banner.Info>
            </Banner.Body>
            <Banner.Footer>
                <Banner.Button size="small">Update</Banner.Button>
            </Banner.Footer>
        </Banner>
    );
};


export const withTwoButtons = (): ReactElement => {
    const color = select('color', ['success', 'warning', 'danger', 'info'], 'info');
    const iconName = text('icon', 'info');
    const variant = select('variant', ['major', 'minor', 'alert'], 'minor');
    const isLoading = boolean('isLoading', false);
    const title = text('Banner.Title', 'OvrC 2.0');
    const info = text('Banner.Info', 'This is our new app, waddup');


    return (
        <Banner
            color={color}
            variant={variant}
        >
            <Banner.Icon iconName={iconName} isLoading={isLoading} />
            <Banner.Body>
                <Banner.Title>{title}</Banner.Title>
                <Banner.Info>{info}</Banner.Info>
            </Banner.Body>
            <Banner.Footer>
                <Banner.Button size="medium" variant="text">Dismiss</Banner.Button>
                <Banner.Button size="medium">Learn More</Banner.Button>
            </Banner.Footer>
        </Banner>
    );
};
