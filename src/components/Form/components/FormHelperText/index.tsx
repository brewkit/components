import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '@components/Typography';
import { Props } from './types';


function FormHelperText({
    color = 'info',
    className,
    children,
}: Props): ReactElement {


    const classes = clsx(
        'brew-FormHelperText',
        `brew-FormHelperText--color-${color}`,
        className,
    );


    return (
        <div className={classes}>
            <Typography color="inherit">{children}</Typography>
        </div>
    );


}


export default FormHelperText;
