import React from 'react';
import clsx from 'clsx';
import { CircularProgress as MuiProgressCircular } from '@material-ui/core';
import { Props } from './types';


/**
 * The `<Progress.Circular />` component renders a spinning loading indicator.
 */
export const ProgressCircular = React.forwardRef(({
    variant = 'indeterminate',
    color = 'primary',
    size = 'inherit',
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classNames = clsx(
        `brew-ProgressCircular--variant-${variant}`,
        `brew-ProgressCircular--color-${color}`,
        `brew-ProgressCircular--size-${size}`,
        className,
    );


    return (
        <MuiProgressCircular
            className={classNames}
            ref={ref}
            thickness={4}
            variant={variant}
            {...otherProps}
        />
    );


});


ProgressCircular.displayName = 'ProgressCircular';


export default ProgressCircular;
