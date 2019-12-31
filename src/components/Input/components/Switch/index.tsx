import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';


function Switch({ className, ...otherProps }: Props): ReactElement {
    const switchClasses = clsx(
        'brew-Input--Switch',
        className,
    );
    const reactFrag = (
        <React.Fragment>
            <span className="brew-Input--Switch__track" />
            <span className="brew-Input--Switch__knob" />
            <span className="brew-Input--Switch__spacer" />
        </React.Fragment>
    );

    return (
        <InputBase className={switchClasses} type="checkbox" {...otherProps} after={reactFrag} />
    );
}


export default Switch;
