import React from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `Tab` component represents a clickable button, which can be used in forms or anywhere in the application
 * that needs simple, standard button functionality.
 */
function Tab({
    children,
    className,
    ...otherProps
}: Props) {


    const tabClasses = clsx(
        styles.wrapper,
        className,
    );


    return (
        <span className={tabClasses}>
            <Typography>{children}</Typography>
        </span>
    );


}


export default Tab;