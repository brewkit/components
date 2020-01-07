import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function BannerButton({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const buttonClasses = clsx(
        'brew-Banner__footer',
        className,
    );


    return (
        <div className={buttonClasses} {...otherProps}>{children}</div>
    );


}


export default BannerButton;
