import React, { FormEvent, ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function RadioGroup({
    name,
    value,
    defaultValue,
    onChange = (): true => true,
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
            {React.Children.map(children, (child: ReactElement) => React.cloneElement(child, {
                checked: Boolean(value) && child.props.value === value ? true : undefined,
                defaultChecked: Boolean(defaultValue) && child.props.value === defaultValue ? true : undefined,
                name,
                onChange: (event: FormEvent): void => onChange(event),
                ...child.props,
            }))}
        </div>
    );

}


export default RadioGroup;
