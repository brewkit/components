import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';
import CustomControl from './components/SelectCustomControl';


function Select(props: Props): ReactElement {
    const {
        className,
        customControl,
        children,
        ...otherProps
    } = props;

    const classes = clsx(
        'brew-Select',
        className,
    );

    return (
        <InputBase as="select" className={classes} customControl={customControl || <CustomControl {...props} />} {...otherProps}>
            {children}
        </InputBase>
    );

}


export default Select;
