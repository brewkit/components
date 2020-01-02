import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function RadioGroup({
    name,
    defaultValue,
    onChange,
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-RadioGroup',
        className,
    );


    return (
            <div className={classes} {...otherProps}>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        name: name,
                        defaultChecked: Boolean(defaultValue) && child.props.value === defaultValue ? true : undefined,
                        onChange: onChange ? (e) => { onChange(e) } : undefined,
                        ...child.props,
                    });
                })}
            </div>
    );

}


export default RadioGroup;
