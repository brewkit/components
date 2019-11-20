import React from 'react';
import { Switch } from 'react-router-dom';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `Tabs` component represents a clickable button, which can be used in forms or anywhere in the application
 * that needs simple, standard button functionality.
 */
function Tabs({
    children,
    className,
    ...otherProps
}: Props) {


    const wrapperStyles = clsx(
        [styles.wrapper],
        className,
    );


    return (
        <Switch>
            <div className={wrapperStyles} {...otherProps}>
                {children}
            </div>
        </Switch>
    );


}


export default Tabs;