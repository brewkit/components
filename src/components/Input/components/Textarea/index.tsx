import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import InputIcon from '../InputIcon';
import { Props } from './types';

function Textarea({
    after = undefined,
    before = undefined,
    className = undefined,
    disabled = false,
    hasError = false,
    rows = 4,
    ...otherProps
}: Props): ReactElement {

    const classes = clsx(
        'brew-Input--textarea',
        className,
    );

    const Before = (): ReactElement => (
        <div className="brew-Input__before">
            {before}
        </div>
    );

    const After = (): ReactElement => (
        <div className="brew-Input__after">
            {!disabled && hasError ? (
                <InputIcon className="brew-Input__afterIcon" color="danger" variant="error_outline" />
            ) : after}
        </div>
    );

    return (
        <InputBase
            after={((!disabled && hasError) || Boolean(after)) && <After />}
            as="textarea"
            before={Boolean(before) && <Before />}
            className={classes}
            disabled={disabled}
            hasError={hasError}
            rows={rows}
            {...otherProps}
        />
    );


}


export default Textarea;
