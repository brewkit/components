import React from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import Typography from '../../../Typography';
import styles from './styles.scss';
import { Props } from './types';


const StandardStatusCard = ({className, color, icon, header, body, disabled, fill, ...otherProps}: Props) => {

    const standardClasses = clsx(
        styles.wrapper,
        styles[`color--${color}`],
        disabled && styles.isDisabled,
        fill && styles.isFilled,
        className
    );

    return (
        <div className={standardClasses} {...otherProps}>
            <section className={styles.icon}>
                <Icon color={color}>{icon}</Icon>
            </section>
            <section>
                <Typography variant="h1" color={color}>{header}</Typography>
                <Typography variant="body1" color={color}>{body}</Typography>
            </section>
        </div>
    );
};

export default StandardStatusCard;
