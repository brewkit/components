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
            className={placeholderClasses}
            isFluid={variant === 'primary' ? true : undefined}
            onClick={onClick}
            variant={variant === 'secondary' ? 'text' : undefined}
        >
            {children}
        </Button>
    );


}


export default PlaceholderAction;
