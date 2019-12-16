import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import StatusCard from './index';

export default { title: 'Status Card'};

export const General = () => (

    <StatusCard
        header={text("Header", "hello")}
        body={text("Body", "goodbye")}
        color={select("Color", ["info", "success", "danger"], "info")}
        disabled={boolean("Disabled", false)}
        fill={boolean("Fill", false)}
        icon={text("Icon", "accessible")}
        variant={select("Variant", ["standard", "compact"], "standard")}
    />

);
