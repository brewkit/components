import * as React from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import InputIcon from '../InputIcon';
import { Props } from './types';
import styles from './styles.scss';

function Textarea({
    after = undefined,
    before = undefined,
    className = undefined,
    disabled = false,
    error = false,
    fullWidth = false,
    inputClassName = undefined,
    rows = '4',
    ...otherProps
 }: Props) {

    const Before = () => {
        return (
            <div className={styles.prependInput}>
                {before}
            </div>
        );
    };

    const After = () => {
        return (
            <div className={styles.appendInput}>
                {!disabled && error ? (
                    <InputIcon variant="error_outline" color="danger" />
                ) : after}
            </div>
        );
    };

    const classes = clsx(
        styles.textareaWrapper,
        { [styles.hasPrepend]: !!before },
        { [styles.hasAppend]: !!after || (!disabled && error) },
        { [styles.isDisabled]: disabled },
        { [styles.hasError]: error },
        { [styles.isFullWidth]: fullWidth },
        className,
    );

    const inputClasses = clsx(
        styles.textarea,
        inputClassName,
    );

    return (
        <InputBase 
            as="textarea"
            after={((!disabled && error) || !!after) && <After />}
            before={!!before && <Before />}
            className={classes}
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            inputClassName={inputClasses}
            rows={rows}
            {...otherProps}
        />
    );
}

export default Textarea;