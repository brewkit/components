import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';


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

    const childArray = React.Children.toArray(children);

    return (
        <InputBase as="select" className={classes} customControl={customControl || defaultCustomControl} {...otherProps}>
            {children}
        </InputBase>
    );

}


export default Select;
