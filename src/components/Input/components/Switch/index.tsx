import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';


function Switch({
    className,
    customControl,
    children,
    ...otherProps
}: Props): ReactElement {


    const switchClasses = clsx(
        'brew-Switch',
        className,
    );


    const defaultCustomControl = (
        <div className="brew-Switch__control">
            <span className="brew-Switch__track" />
            <span className="brew-Switch__knob" />
        </div>
    );


    return (
        <InputBase
            className={switchClasses}
            customControl={customControl ?? defaultCustomControl}
            label={children}
            type="checkbox"
            {...otherProps}
        />
    );


}


export default Switch;
