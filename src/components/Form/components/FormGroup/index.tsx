import React, { ReactElement } from 'react';
import { Props } from './types';
import clsx from 'clsx';


function FormGroup({
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-FormGroup',
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );


}


export default FormGroup;
