import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import InputIcon from '../InputIcon';
import { Props } from './types';


function TextInput({
    after = undefined,
    before = undefined,
    className = undefined,
    error = false,
    disabled = false,
    ...otherProps
}: Props): ReactElement {

    const Before = (): ReactElement => (
        <div className="brew-Input__before">{before}</div>
    );

    const After = (): ReactElement => (
        <div className="brew-Input__after">
            {error ? (
                <InputIcon className="brew-Input__afterIcon" color="danger" variant="error_outline" />
            ) : after}
        </div>
    );

    const classes = clsx(
        'brew-Input--textInput',
        className,
    );

    return (
        <InputBase
            after={after || ((!disabled && error) && <After />)}
            before={before && <Before />}
            className={classes}
            disabled={disabled}
            error={error}
            type="text"
            {...otherProps}
        />
    );
}


export default TextInput;
