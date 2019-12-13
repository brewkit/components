import React from "react";
import clsx from "clsx";
import styles from './styles.scss';
import { Props } from './types';


/**
 * The `<CardHeader />` component is intended to be used inside the `<Card />` component to create a header.
 */
function CardHeader({ className, ...otherProps}: Props) {
    return (
        <div className={clsx(styles.cardHeader, className)} {...otherProps} />
    );
}


export default CardHeader;