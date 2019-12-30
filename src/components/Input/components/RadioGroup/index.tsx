import React, { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './styles.scss';
import { Props } from './types';


function RadioGroup({
    className,
    inputLabel,
    inputLabelClassName,
    children,
}: Props): ReactElement {

    const classes = clsx(
        styles.wrapper,
        className,
    );


    return (
        <div className={classes}>
            <label className={inputLabelClassName}>{inputLabel}</label>
            {children}
        </div>
    );

}


export default RadioGroup;
