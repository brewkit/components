import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props } from './types';


/**
 * The `<Flag />` is used to display content classification.
 */
function Flag({
    title,
    color = 'info',
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Flag',
        `brew-Flag--color-${color}`,
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {title && (
                <div className="title">
                    <Typography className="titleContent" color="inherit" variant="label">{title}</Typography>
                </div>
            )}
            <div className="content">
                <Typography color={color} variant="label">{children}</Typography>
            </div>
        </div>
    );


}


export default Flag;
