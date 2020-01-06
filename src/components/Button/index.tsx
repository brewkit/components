import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import Typography from '../Typography';
import Icon from '../Icon';
import Progress from '../Progress';
import { Props } from './types';


/**
 * The `Button` component represents a clickable button, which can be used in forms or anywhere in the application
 * that needs simple, standard button functionality.
 */
function Button({
    variant = 'standard',
    color = 'primary',
    size = 'medium',
    isLoading = false,
    isCompact = false,
    isCircular = false,
    isFluid = false,
    isDisabled = false,
    children,
    className,
    ...otherProps
}: Props): ReactElement {


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
        <Flipper flipKey={JSON.stringify([isLoading, variant, color, size])}>
            <Flipped flipId="wrapper">
                <button
                    aria-label={(variant === 'icon' && typeof children === 'string') ? children : undefined}
                    className={buttonClasses}
                    disabled={isDisabled || isLoading}
                    type="button"
                    {...otherProps}
                >
                    <Flipped flipId="content">
                        <div className="brew-Button__content">
                            <Typography className="brew-Button__text">
                                {children}
                            </Typography>
                            {variant === 'icon' && typeof children === 'string' &&
                                <Icon className="brew-Button__icon" color="inherit">
                                    {children}
                                </Icon>
                            }
                        </div>
                    </Flipped>
                    <Flipped flipId="loader">
                        <Progress className="brew-Button__loadingIndicator" color={color} variant="circular" />
                    </Flipped>
                </button>
            </Flipped>
        </Flipper>
    );


}


export default Button;
