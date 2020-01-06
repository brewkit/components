import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function DialogBody({
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Dialog__body',
        className,
    );


    return (
        <div className={classes} {...otherProps} />
    );


}


export default DialogBody;
