import React from 'react';
import clsx from 'clsx';
import styles from './styles.scss';
import { Props } from './types';
import Typography from "../Typography";
import Icon from '../Icon';

const StatusCard = ({color, icon, header, body, disabled, fill, ...otherProps}: Props) => {

    const statusCardClasses = clsx(
        styles.wrapper,
        styles.standard,
        styles[`color--${color}`],
        disabled && styles.disabled,
        fill && styles.fill,
    );

    return (
        <div className={statusCardClasses} {...otherProps}>
            {icon && (
                <section className={styles.icon}>
                    <Icon color={color}>{icon}</Icon>
                </section>
            )}
            <section>
                <Typography variant="h1" color={color}>{header}</Typography>
                <Typography variant="body1" color={color}>{body}</Typography>
            </section>
        </div>
    )
};

export default StatusCard;
