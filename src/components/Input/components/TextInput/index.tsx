import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import InputIcon from '../InputIcon';
import styles from './styles.scss';
import { Props } from './types';


function TextInput({
    after = undefined,
    before = undefined,
    className = undefined,
    error = false,
    disabled = false,
    fullWidth = false,
    inputClassName,
    ...otherProps
}: Props): ReactElement {


    const Before = (): ReactElement => (
        <div className={styles.prependInput}>{before}</div>
    );


    const After = (): ReactElement => (
        <div className={styles.appendInput}>
            {error ? (
                <InputIcon color="danger" variant="error_outline" />
            ) : after}
        </div>
    );


    const classes = clsx(
        styles.inputWrapper,
        { [styles.hasAfter]: Boolean(after) || (!disabled && error) },
        { [styles.hasBefore]: Boolean(before) },
        { [styles.isDisabled]: Boolean(disabled) },
        { [styles.hasError]: Boolean(error) },
        { [styles.isFullWidth]: Boolean(fullWidth) },
        className,
    );


    const inputClasses = clsx(
        styles.input,
        inputClassName,
    );


    return (
        <InputBase
            after={after || ((!disabled && error) && <After />)}
            before={before && <Before />}
            className={classes}
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            inputClassName={inputClasses}
            type="text"
            {...otherProps}
        />
    );
}


export default TextInput;
