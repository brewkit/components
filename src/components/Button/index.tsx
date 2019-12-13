import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import Typography from '../Typography';
import Icon from '../Icon';
import Progress from '../Progress';
import { Props } from './types';
import styles from './styles.scss';


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
        styles.wrapper,
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`size--${size}`],
        { [styles.isLoading]: isLoading },
        { [styles.disabled]: disabled || isLoading },
        { [styles.isCompact]: isCompact },
        { [styles.isCircular]: isCircular && !isFluid },
        { [styles.isFluid]: isFluid },
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
                        <div className={styles.content}>
                            <span className={styles.buttonText}>
                                <Typography>
                                    {children}
                                </Typography>
                            </span>
                            {variant === 'icon' && typeof children === 'string' &&
                                <span className={styles.icon}>
                                    <Icon color="inherit">
                                        {children}
                                    </Icon>
                                </span>
                            }
                        </div>
                    </Flipped>
                    <Flipped flipId="loader">
                        <div className={styles.loadingIndicator}>
                            <Progress color={color} variant="circular" />
                        </div>
                    </Flipped>
                </button>
            </Flipped>
        </Flipper>
    );


}


export default Button;
