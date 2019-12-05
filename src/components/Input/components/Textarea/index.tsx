import * as React from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';
import styles from './styles.scss';

function Textarea({ className, inputProps, rows = 4, inputClassName, ...otherProps }: Props) {

    const { error, disabled } = otherProps;
    const inputClasses = clsx(
        { [styles.isDisabled]: !!disabled },
        { [styles.hasError]: !!error },
        styles.textarea,
        inputClassName,
    );

    return (
        <InputBase as="textarea" inputClassName={inputClasses} {...otherProps} />
    );
}

export default Textarea;