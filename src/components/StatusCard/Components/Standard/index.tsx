import React from 'react';
import styles from './styles.scss';
import { Props } from './types';
import Icon from '../../../Icon';
import Typography from '../../../Typography';


const StandardStatusCard = ({className, color, icon, header, body, ...otherProps}: Props) => {

    return (
        <div className={className} {...otherProps}>
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
