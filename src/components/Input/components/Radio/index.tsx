import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';


function Checkbox({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Radio',
        className,
    );


    return (
        <InputBase
            className={classes}
            customControl={<div className="brew-Radio__control" />}
            label={children}
            tabIndex={1}
            type="radio"
            {...otherProps}
        />
    );


}


export default Checkbox;
