import React from 'react';
import clsx from 'clsx';
import { Typography as MuiTypography } from '@material-ui/core';
import { Props } from './types';



/**
 * The `<Typography />` component renders text using the 'Roboto' font in various styles.
 */
export const Typography = React.forwardRef(({
    variant = 'body1',
    align = 'inherit',
    display = 'initial',
    shouldTruncate = false,
    color,
    hasGutter = false,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classNames = clsx(
        'brew-Typography',
        [`brew-Typography--display-${display}`],
        { [`brew-Typography--variant-${String(variant)}`]: variant },
        { [`brew-Typography--align-${String(align)}`]: align },
        { [`brew-Typography--color-${String(color)}`]: color },
        { 'brew-Typography--shouldTruncate': shouldTruncate },
        { 'brew-Typography--hasGutter': hasGutter },
        className,
    );


    return (
        <MuiTypography
            align={align}
            className={classNames}
            display={display}
            gutterBottom={hasGutter}
            noWrap={shouldTruncate}
            ref={ref}
            variant={variant}
            {...otherProps}
        />
    );


});


Typography.displayName = 'Typography';


export default Typography;
