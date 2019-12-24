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
    error = false,
    rows = 4,
    ...otherProps
}: Props): ReactElement {

    const classes = clsx(
        'bk-Input--textarea',
        className,
    );

    const Before = (): ReactElement => (
        <div className="bk-Input__before">
            {before}
        </div>
    );

    const After = (): ReactElement => (
        <div className="bk-Input__after">
            {!disabled && error ? (
                <InputIcon className="bk-Input__afterIcon" color="danger" variant="error_outline" />
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
            rows={rows}
            {...otherProps}
        />
    );


}


export default Textarea;
