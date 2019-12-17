import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props } from './types';
import styles from './styles.scss';


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
        styles.wrapper,
        styles[`color--${color}`],
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {title && (
                <div className={styles.title}>
                    <Typography className={styles.titleContent} variant="label">{title}</Typography>
                </div>
            )}
            <div className={styles.content}>
                <Typography color={color} variant="label">{children}</Typography>
            </div>
        </div>
    );


}


export default Label;
