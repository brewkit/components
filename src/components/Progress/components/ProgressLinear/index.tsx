import React from 'react';
import clsx from 'clsx';
import MuiProgressLinear from '@material-ui/core/LinearProgress';
import { Props } from './types';


/**
 * The `<ProgressLinear />` component renders a horizontal loading indicator.
 */
export const ProgressLinear = React.forwardRef(({
    variant = 'indeterminate',
    color = 'primary',
    size = 'inherit',
    bufferValue,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        bar: 'brew-ProgressLinear__bar',
        dashed: 'brew-ProgressLinear__dashedBar',
        bar2Buffer: 'brew-ProgressLinear__bufferBar',
    };


    const classNames = clsx(
        'brew-ProgressLinear',
        `brew-ProgressLinear--variant-${variant}`,
        `brew-ProgressLinear--color-${color}`,
        `brew-ProgressLinear--size-${size}`,
        className,
    );


    return (
        <MuiProgressLinear
            classes={classes}
            className={classNames}
            ref={ref}
            valueBuffer={bufferValue}
            variant={variant}
            {...otherProps} />
    );


});


ProgressLinear.displayName = 'ProgressLinear';


export default ProgressLinear;
