import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';
import styles from './styles.scss';


const CompactStatusCard = ({
    className,
    color,
    header,
    body,
    disabled,
    fill,
    ...otherProps
}: Props): ReactElement => {


    const compactClasses = clsx(
        styles.wrapper,
        styles[`color--${color}`],
        { [styles.isDisabled]: disabled },
        { [styles.isFilled]: fill },
        className,
    );


    return (
        <div className={compactClasses} {...otherProps}>
            <Typography align="center" color={color} variant="body1">
                {header}
            </Typography>
            <Typography align="center" className={styles.cardBody} variant="body1">
                {body.toUpperCase()}
            </Typography>
        </div>
    );


};


export default CompactStatusCard;
