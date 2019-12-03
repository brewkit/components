import React from 'react';
import clsx from "clsx";
import styles from './styles.scss';
import { Props } from './types';
import CardBody from './components/CardBody';
import CardHeader from './components/CardHeader';
import CardTitle from './components/CardTitle';

/**
 * The `<Card />` component is a flexible and extensible content container.
 */
function Card({ noBorder, className, children, ...otherProps }: Props) {
    const classes = clsx(
        styles.card,
        { [styles.noBorder]: !!noBorder },
        className,
    );
    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
}

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Title = CardTitle;

export default Card;
