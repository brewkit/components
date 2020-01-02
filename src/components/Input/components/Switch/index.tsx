import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';


function Switch({ className, ...otherProps }: Props): ReactElement {
    const switchClasses = clsx(
        'brew-Input--Switch',
        className,
    );
    const customControl = (
        <div className="brew-Input__customControl">
            <span className="brew-Input__customControlTrack" />
            <span className="brew-Input__customControlKnob" />
        </div>
    );

    return (
        <InputBase className={switchClasses} customControl={customControl} type="checkbox" {...otherProps} />
    );
}


export default Switch;
