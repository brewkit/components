import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import StatusCard from './index';
import StandardStatusCard from './Components/Standard';
import CompactStatusCard from "./Components/Compact";

export default { title: 'Components|Display/Status Card'};

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

export const Standard = () => (

    <StandardStatusCard
        icon={text("Icon", "business")}
        color={select("Color", ["info", "success", "danger"], "info")}
        header={text("Header", "28")}
        body={text("Body", "errors")}
        disabled={boolean("Disabled", false)}
        fill={boolean("Fill", false)}
    />

);

export const Compact = () => (

    <CompactStatusCard
        color={select("Color", ["info", "success", "danger"], "info")}
        header={text("Header", "50 Days 23h 2m")}
        body={text("Body", "total recorded")}
        disabled={boolean("Disabled", false)}
        fill={boolean("Fill", false)}
    />

);
