import React from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `Paper` component serves as a wrapping element that provides a card-like or paper-like appearance.
 */
export const Paper = React.forwardRef(({
    className,
    component: Component = 'div',
    isRounded = true,
    elevation = 1,
    variant = 'elevation',
    ...other
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-Paper',
        `brew-Paper--elevation-${String(elevation)}`,
        `brew-Paper--variant-${variant}`,
        { 'brew-Paper--isRounded': isRounded },
        className,
    );


    return <Component className={classes} ref={ref} {...other} />;


});


export default Paper;
