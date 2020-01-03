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
        <div className="brew-Input__custom">
            <span className="brew-Input__track" />
            <span className="brew-Input__knob" />
        </div>
    );


    return (
        <InputBase className={switchClasses} customControl={customControl} type="checkbox" {...otherProps} />
    );


}


export default Switch;
