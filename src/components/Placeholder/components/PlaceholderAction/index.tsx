import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../../Button';
import { Props } from './types';


function PlaceholderAction({
    className,
    variant = 'primary',
    onClick,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        `brew-Placeholder__${variant}Action`,
        className,
    );


    return (
        <Button
            variant={variant === 'secondary' ? 'text' : undefined}
            className={placeholderClasses}
            onClick={onClick}
            isFluid={variant === 'primary' ? true : undefined}
        >
            {children}
        </Button>
    );


}


export default PlaceholderAction;
