import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<CardBody />` component creates consistent spacing inside a card for enclosed content.
 */
function CardBody({
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-CardBody',
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );


}


export default CardBody;
