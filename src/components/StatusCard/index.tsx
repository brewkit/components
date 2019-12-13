import React from 'react';
import clsx from 'clsx';
import styles from './styles.scss';
import { Props } from './types';
import Typography from "../Typography";

const StatusCard = ({color, icon, header, body, disabled, fill, ...otherProps}: Props) => {
console.log(styles)
    const statusCardClasses = clsx(
        styles.wrapper,
        styles.standard,
        styles[`color--${color}`],
        disabled && styles.disabled,
        fill && styles.fill,
    );

    return (
        <div className={statusCardClasses} {...otherProps}>
            <Typography variant="h1" color={color}>{header}</Typography>
            <Typography variant="body1" color={color}>{body}</Typography>
        </div>
    )
};

export default StatusCard;
console.log(styles)
