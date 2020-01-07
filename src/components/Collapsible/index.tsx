import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function Collapsible({
    className,
    children,
}: Props): ReactElement {

    const classes = clsx(
        'brew-Collapsible',
        className,
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );

}


export default Collapsible;
