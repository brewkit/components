import React, { ReactElement } from 'react';
import StandardStatusCard from './Components/Standard';
import CompactStatusCard from './Components/Compact';
import { Props } from './types';


const components = {
    compact: CompactStatusCard,
    standard: StandardStatusCard,
};

const StatusCard = ({
    className,
    variant,
    color,
    header,
    body,
    ...otherProps
}: Props): ReactElement => {

    const Element = components[variant] || CompactStatusCard;

    return <Element body={body} className={className} color={color} header={header} {...otherProps} />;
};


export default StatusCard;
