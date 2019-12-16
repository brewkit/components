import React from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';
import styles from './styles.scss';


const CompactStatusCard = ({className, color, header, body, disabled, fill, ...otherProps}: Props) => {

    const compactClasses = clsx(
        styles.wrapper,
        styles[`color--${color}`],
        disabled && styles.isDisabled,
        fill && styles.isFilled,
        className
    );

    return (
        <div className={compactClasses} {...otherProps} >
            <Typography align="center" variant="body1" color={color}>{header}</Typography>
            <Typography className={styles.cardBody} align="center" variant="body1">{body.toUpperCase()}</Typography>
        </div>
    );
};

export default CompactStatusCard;
