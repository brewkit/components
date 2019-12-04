import React from "react";
import clsx from "clsx";
import InputBase from "../InputBase";
import styles from './styles.scss';
import { Props } from "../InputBase/types";

function TextInput({
    as = "input",
    type = "text",
    error = false,
    inputProps = {},
    fullWidth,
    disabled,
    ...otherProps
}: Props) {

    const { className: inputClassName, ...otherInputProps } = inputProps || {};

    const inputClasses = clsx(
        { [styles.hasError]: !!error },
        { [styles.fullWidth]: !!fullWidth },
        { [styles.isDisabled]: !!disabled },
        styles.input,
        inputClassName,
    );

    return <InputBase as={as} type={type} error={error} disabled={disabled} inputProps={{ ...otherInputProps, className: inputClasses }} {...otherProps} />;
}

export default TextInput;
