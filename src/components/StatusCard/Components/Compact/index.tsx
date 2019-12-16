import React from 'react';
import { Props } from './types';
import clsx from 'clsx';
import styles from './styles.scss';
import Typography from '../../../Typography';

const CompactStatusCard = ({className, color, header, body, ...otherProps}: Props) => {

    const bodyClasses = clsx(
        styles.cardBody
    );

    return (
        <div className={className} {...otherProps} >
            <Typography align="center" variant="body1" color={color}>{header}</Typography>
            <Typography className={bodyClasses} align="center" variant="body1">{body.toUpperCase()}</Typography>
        </div>
    );
};

export default CompactStatusCard;
