import * as React from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';
import styles from './styles.scss';

function Textarea({ className, inputProps, ...otherProps }: Props) {

    const { error, disabled } = otherProps;
    const { className: inputClassName, rows = 4, ...otherInputProps } = inputProps || {};
    const inputClasses = clsx(
        { [styles.isDisabled]: !!disabled },
        { [styles.hasError]: !!error },
        styles.textarea,
        inputClassName,
    );

    return (
        <InputBase as="textarea" inputProps={{ ...otherInputProps, className: inputClasses, rows }} {...otherProps} />
    );
}

export default Textarea;