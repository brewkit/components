import React from "react";
import clsx from "clsx";
import InputBase from "../InputBase";
import styles from './styles.scss';
import { Props } from "../InputBase/types";

function TextInput({
    as = "input",
    type = "text",
    inputClassName,
    ...otherProps
}: Props) {

    const { error, fullWidth, disabled } = otherProps;

    const inputClasses = clsx(
        { [styles.hasError]: !!error },
        { [styles.fullWidth]: !!fullWidth },
        { [styles.isDisabled]: !!disabled },
        styles.input,
        inputClassName,
    );

    return <InputBase as={as} type={type} inputClassName={inputClasses} {...otherProps} />;
}

export default TextInput;
