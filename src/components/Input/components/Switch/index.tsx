import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';


function Switch({
    className,
    ...otherProps
}: Props): ReactElement {
    const switchClasses = clsx(
        'brew-Switch',
        className,
    );

    const customControl = (
        <div className="brew-Switch__custom">
            <span className="brew-Switch__track" />
            <span className="brew-Switch__knob" />
        </div>
    );

    return (
        <InputBase className={switchClasses} customControl={customControl} type="checkbox" {...otherProps} />
    );
}


export default Switch;
