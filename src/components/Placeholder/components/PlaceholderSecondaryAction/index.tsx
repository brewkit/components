import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../../Button';
import { Props } from './types';


function PlaceholderPrimaryAction({
    className,
    onClick,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        'brew-Placeholder__SecondaryAction',
        className,
    );


    return (
        <Button className={placeholderClasses} onClick={onClick}>{children}</Button>
    );


}


export default PlaceholderPrimaryAction;
