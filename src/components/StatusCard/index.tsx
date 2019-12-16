import React from 'react';
import StandardStatusCard from './Components/Standard';
import CompactStatusCard from './Components/Compact';
import { Props } from './types';

const components = {
    standard: StandardStatusCard,
    compact: CompactStatusCard,
};

const StatusCard = ({ className, variant,color, header, body, disabled, fill, ...otherProps}: Props) => {

    const Element = components[variant] || CompactStatusCard;

    return <Element className={className} color={color} header={header} body={body} {...otherProps} />;
};

export default StatusCard;
