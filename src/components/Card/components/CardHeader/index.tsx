import React, { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './styles.scss';
import { Props } from './types';


/**
 * The `<CardHeader />` component is intended to be used inside the `<Card />` component to create a header.
 */
function CardHeader({
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        styles.wrapper,
        className,
    );


    return (
        <div className={classes} {...otherProps} />
    );


}


export default CardHeader;
