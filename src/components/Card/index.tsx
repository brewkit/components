import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';
import CardBody from './components/CardBody';
import CardHeader from './components/CardHeader';
import CardTitle from './components/CardTitle';


/**
 * The `<Card />` component is a flexible and extensible content container.
 */
function Card({
    hasBorder = true,
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Card',
        { 'brew-Card--hasBorder': hasBorder },
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
