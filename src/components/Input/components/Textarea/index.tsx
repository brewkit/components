import React, { ReactElement } from 'react';
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
    rows = 4,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        styles.textareaWrapper,
        { [styles.hasPrepend]: Boolean(before) },
        { [styles.hasAppend]: Boolean(after) || (!disabled && error) },
        { [styles.isDisabled]: disabled },
        { [styles.hasError]: error },
        { [styles.isFullWidth]: fullWidth },
        className,
    );

    const inputClasses = clsx(
        styles.textarea,
        inputClassName,
    );


    const Before = (): ReactElement => (
        <div className={styles.prependInput}>
            {before}
        </div>
    );


    const After = (): ReactElement => (
        <div className={styles.appendInput}>
            {!disabled && error ? (
                <InputIcon color="danger" variant="error_outline" />
            ) : after}
        </div>
    );


    return (
        <InputBase
            after={((!disabled && error) || Boolean(after)) && <After />}
            as="textarea"
            before={Boolean(before) && <Before />}
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
