import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';


function Switch({
    className,
    customControl,
    ...otherProps
}: Props): ReactElement {


    const switchClasses = clsx(
        'brew-Switch',
        className,
    );


    const defaultCustomControl = (
        <div className="brew-Input__custom">
            <span className="brew-Input__track" />
            <span className="brew-Input__knob" />
        </div>
    );


    return (
        <InputBase className={switchClasses} customControl={customControl || defaultCustomControl} type="checkbox" {...otherProps} />
    );


}


export default Switch;
