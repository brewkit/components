import React from 'react';
import clsx from 'clsx';
import styles from './styles.scss';
import { Props } from './types';
import StandardStatusCard from './Components/Standard';
import CompactStatusCard from './Components/Compact';

const StatusCard = ({ className, variant,color, header, body, disabled, fill, ...otherProps}: Props) => {

    const components = {
        standard: StandardStatusCard,
        compact: CompactStatusCard,
    };

    const statusCardClasses = clsx(
        styles.wrapper,
        styles[variant] || styles.compact,
        styles[`color--${color}`],
        disabled && styles.disabled,
        fill && styles.fill,
        className,
    );

    const Element = components[variant] || CompactStatusCard;

    return <Element className={statusCardClasses} color={color} header={header} body={body} {...otherProps} />;
};

export default StatusCard;
