import React from 'react';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props } from './types';
import styles from './styles.scss';


function Divider(props: Props) {


    const {
        children,
        align = 'center',
        className,
        ...otherProps
    } = props;


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
