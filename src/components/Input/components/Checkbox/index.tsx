import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import InputBase from '../InputBase';
import { Props } from './types';
import styles from './styles.scss';


function Checkbox({
    className = undefined,
    customControl = undefined,
    disabled = false,
    error = false,
    fullWidth = false,
    inputLabelClassName = undefined,
    ...otherProps
}: Props): ReactElement {


    const defaultCustomControl = (): ReactElement => (
        <div className={styles.checkbox}>
            <Icon className={styles.check} size="large">check</Icon>
        </div>
    );


    const classes = clsx(
        styles.wrapper,
        { [styles.isDisabled]: Boolean(disabled) },
        { [styles.hasError]: Boolean(error) },
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
            error={error}
            fullWidth={fullWidth}
            inputLabelClassName={inputLabelClasses}
            type="checkbox"
            {...otherProps}
        />
    );


}


export default Checkbox;
