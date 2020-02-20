import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function FormLabel({
    as = 'label',
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-FormLabel',
        className,
    );

    return (
        <Typography className={classes} component={as} variant="subtitle1" {...otherProps}>
            {children}
        </Typography>
    );


}


export default FormLabel;
