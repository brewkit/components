import React from 'react';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `<Divider />` is used to break up content or provide a visual break. It can optionally hold
 * content or a message.
 */
function Divider({
    align = 'center',
    children,
    className,
    ...otherProps
}: Props) {


    const classes = clsx(
        styles.wrapper,
        styles[`align--${align}`],
        { [styles.noChildren]: !children },
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {children ? (
                <React.Fragment>
                    <hr />
                    <Typography variant="label">{children}</Typography>
                    <hr />
                </React.Fragment>
            ) : (
                <hr />
            )}
        </div>
    );


}


export default Divider;
