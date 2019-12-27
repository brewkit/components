import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props } from './types';


/**
 * The `<Label />` is used to display content classification.
 */
function Label({
    title,
    color = 'info',
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'Label__wrapper',
        `Label__color--${color}`,
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {title && (
                <div className="Label__title">
                    <Typography className="Label__titleContent" variant="label">{title}</Typography>
                </div>
            )}
            <div className="Label__content">
                <Typography color={color} variant="label">{children}</Typography>
            </div>
        </div>
    );


}


export default Label;
