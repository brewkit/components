import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function BannerBody({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const textClasses = clsx(
        'brew-Banner__body',
        className,
    );


    return (
        <div className={textClasses} {...otherProps}>
            {children}
        </div>
    );


}


export default BannerBody;
