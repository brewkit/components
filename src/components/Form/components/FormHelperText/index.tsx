import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function FormHelperText({
    color,
    className,
    children,
}: Props): ReactElement {


    const classes = clsx(
        'brew-FormHelperText',
        { [`brew-FormHelperText--color-${color}`]: Boolean(color) },
        className,
    );


    return (
        <div className={classes}>
            {children}
        </div>
    );


}


export default FormHelperText;
