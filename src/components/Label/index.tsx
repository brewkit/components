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
        'brew-Label',
        `brew-Label__color--${color}`,
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {title && (
                <div className="title">
                    <Typography className="titleContent" variant="label">{title}</Typography>
                </div>
            )}
            <div className="content">
                <Typography color={color} variant="label">{children}</Typography>
            </div>
        </div>
    );


}


export default Label;
