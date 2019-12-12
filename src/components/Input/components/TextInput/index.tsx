import React from "react";
import clsx from "clsx";
import InputBase from "../InputBase";
import InputIcon from '../InputIcon';
import styles from './styles.scss';
import { Props } from "./types";

function TextInput(props: Props) {
    const {
        after = undefined,
        before = undefined,
        className = undefined,
        error = false,
        disabled = false,
        fullWidth = false,
        inputClassName,
        type = "text",
        ...otherProps
    } = props;

    const Before = () => {
        return (
            <div className={styles.prependInput}>{before}</div>
        );
    }

    const After = () => {
        return (
            <div className={styles.appendInput}>
                {error ? (
                    <InputIcon color="danger" variant="error_outline" />
                ) : after}
            </div>
        );
    };

    const classes = clsx(
        styles.inputWrapper,
        { [styles.hasAfter]: !!after || (!disabled && error) },
        { [styles.hasBefore]: !!before },
        { [styles.isDisabled]: !!disabled },
        { [styles.hasError]: !!error },
        { [styles.isFullWidth]: !!fullWidth },
        className,
    );

    const inputClasses = clsx(
        styles.input,
        inputClassName,
    );

    return (
        <InputBase
            after={after || (!disabled && error) && <After />}
            before={before && <Before />}
            className={classes}
            error={error}
            disabled={disabled}
            fullWidth={fullWidth}
            inputClassName={inputClasses} 
            type={type} 
            {...otherProps} 
        />
    );
}

export default TextInput;
