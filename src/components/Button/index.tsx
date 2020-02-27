import React from 'react';
import clsx from 'clsx';
import { Button as MuiButton } from '@material-ui/core';
import Typography from '@components/Typography';
import Progress from '@components/Progress';
import { Props } from './types';


/**
 * The `Button` component represents a clickable button, which can be used in forms or anywhere in the application
 * that needs simple, standard button functionality.
 */
export const Button = React.forwardRef(({
    variant = 'standard',
    color = 'primary',
    size = 'medium',
    isLoading = false,
    isCompact = false,
    isCircular = false,
    isFluid = false,
    isDisabled = false,
    startIcon,
    endIcon,
    children,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const buttonClasses = clsx(
        'brew-Button',
        `brew-Button--variant-${variant}`,
        `brew-Button--color-${color}`,
        `brew-Button--size-${size}`,
        { 'brew-Button--isLoading': isLoading },
        { 'brew-Button--isDisabled': isDisabled || isLoading },
        { 'brew-Button--isCompact': isCompact },
        { 'brew-Button--isCircular': isCircular && !isFluid },
        { 'brew-Button--isFluid': isFluid },
        className,
    );


    return (
        <MuiButton
            className={buttonClasses}
            disabled={isDisabled || isLoading}
            ref={ref}
            type="button"
            {...otherProps}
        >
            <div className="brew-Button__content">
                {startIcon}
                {children && (
                    <Typography className="brew-Button__text" variant="button">
                        {children}
                    </Typography>
                )}
                {endIcon}
            </div>
            <div className="brew-Button__loadingIndicator">
                <Progress.Circular color={color === 'link' ? 'primary' : color} />
            </div>
        </MuiButton>
    );


});


Button.displayName = 'Button';


export default Button;
