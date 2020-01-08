import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../../Button';
import { Props } from './types';


function BannerButton({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const buttonClasses = clsx(
        'brew-Banner__button',
        className,
    );


    return (
        <Button className={buttonClasses} {...otherProps}>{children}</Button>
    );


}


export default BannerButton;
