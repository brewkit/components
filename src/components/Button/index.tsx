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
    disabled = false,
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const buttonClasses = clsx(
        'Button__wrapper',
        `Button__variant--${variant}`,
        `Button__color--${color}`,
        `Button__size--${size}`,
        { 'Button--isLoading': isLoading },
        { 'Button--isDisabled': disabled || isLoading },
        { 'Button--isCompact': isCompact },
        { 'Button--isCircular': isCircular && !isFluid },
        { 'Button--isFluid': isFluid },
        className,
    );


    return (
        <Flipper flipKey={JSON.stringify([isLoading, variant, color, size])}>
            <Flipped flipId="wrapper">
                <button
                    aria-label={(variant === 'icon' && typeof children === 'string') ? children : undefined}
                    className={buttonClasses}
                    disabled={disabled || isLoading}
                    type="button"
                    {...otherProps}
                >
                    <Flipped flipId="content">
                        <div className="Button__content">
                            <span className="Button__text">
                                <Typography>
                                    {children}
                                </Typography>
                            </span>
                            {variant === 'icon' && typeof children === 'string' &&
                                <span className="Button__icon">
                                    <Icon color="inherit">
                                        {children}
                                    </Icon>
                                </span>
                            }
                        </div>
                    </Flipped>
                    <Flipped flipId="loader">
                        <div className="Button__loadingIndicator">
                            <Progress color={color} variant="circular" />
                        </div>
                    </Flipped>
                </button>
            </Flipped>
        </Flipper>
    );


}


export default Button;
