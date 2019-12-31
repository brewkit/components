import React, { ReactElement } from 'react';
import Button from '../../../Button';
import { Props } from './types';


function PlaceholderPrimaryAction({
    className,
    onClick,
    children,
}: Props): ReactElement {


    return (
        <div className={className}>
            <Button isFluid onClick={onClick}>{children}</Button>
        </div>
    );


}


export default PlaceholderPrimaryAction;
