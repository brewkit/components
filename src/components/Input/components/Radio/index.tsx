import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';
import styles from './styles.scss';


function Radio({
    className,
    customControl,
    disabled = false,
    fullWidth = false,
    inputLabelClassName,
    ...otherProps
}: Props): ReactElement {


    const defaultCustomControl = (): ReactElement => <div className={styles.radio} />;


    const classes = clsx(
        styles.wrapper,
        { [styles.isDisabled]: Boolean(disabled) },
        { [styles.isFullWidth]: Boolean(fullWidth) },
        className,
    );

    const inputLabelClasses = clsx(
        styles.inputLabel,
        inputLabelClassName,
    );


    return (
        <InputBase
            className={classes}
            customControl={customControl || defaultCustomControl}
            disabled={disabled}
            fullWidth={fullWidth}
            inputLabelClassName={inputLabelClasses}
            type="checkbox"
            {...otherProps}
        />
    );

}


export default Radio;
