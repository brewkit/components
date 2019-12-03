import React from 'react';
import clsx from "clsx";
import styles from './styles.scss';
import { Props } from './types';

/**
 * The `<CardBody />` component creates consistent spacing inside a card for enclosed content.
 */
function CardBody({ className, children, ...otherProps}: Props) {
    const classes = clsx(
        styles.cardBody,
        className,
    );
    return (
        <div className={classes} {...otherProps}>{children}</div>
    );
}

export default CardBody;
