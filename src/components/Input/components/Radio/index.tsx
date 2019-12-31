import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';

function RadioCustomControl(): ReactElement {
    return (
        <div className="brew-Input__customControl" />
    );
}

function Radio({
    className,
    disabled = false,
    fullWidth = false,
    inputLabelClassName,
    ...otherProps
}: Props): ReactElement {

    const classes = clsx(
        'brew-Input--radio',
        className,
    );

    return (
        <InputBase
            className={classes}
            customControl={<RadioCustomControl />}
            disabled={disabled}
            fullWidth={fullWidth}
            inputLabelClassName={inputLabelClassName}
            type="radio"
            {...otherProps}
        />
    );

}


export default Radio;
