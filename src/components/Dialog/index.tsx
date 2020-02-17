/* eslint-disable max-lines-per-function */
import React, { ReactElement, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Button from '../Button';
import Icon from '../Icon';
import Typography from '../Typography';
import { Props } from './types';


/**
 * The Dialog component is used when you want to show a modal.
 */
function Dialog({
    cancelText = 'Cancel',
    children,
    className,
    closeIcon,
    color = 'info',
    confirmText = 'Confirm',
    customFooter,
    hasIcon = true,
    hideFooter,
    icon,
    isOpen = false,
    onBackgroundClick,
    onConfirm,
    onCancel,
    title,
    variant = 'confirm',
    ...otherProps
}: Props): ReactElement | null {


    const classes = clsx(
        'brew-Dialog',
        { 'brew-Dialog--isOpen': Boolean(open) },
        { [`brew-Dialog--${variant}`]: Boolean(variant) },
        { [`brew-Dialog--color-${color}`]: Boolean(color) },
        className,
    );

    const handleConfirmClick = (event: MouseEvent): void => {
        if (onConfirm) onConfirm(event);
    };

    const handleCancelClick = (event: MouseEvent): void => {
        if (onCancel) onCancel(event);
    };

    const handleBackgroundClick = (event: MouseEvent): void => {
        if (onBackgroundClick) onBackgroundClick(event);
    };

    const getIconVariant = (): string => {
        switch (color) {
        case 'success':
            return 'check_circle';
        case 'warning':
            return 'error_outline';
        case 'danger':
            return 'highlight_off';
        default:
            return 'info';
        }
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={classes} {...otherProps}>
            <div className="brew-Dialog__background" onClick={handleBackgroundClick} />
            <div className="brew-Dialog__content">
                <div className="brew-Dialog__header">
                    {hasIcon && (
                        icon ? icon : (
                            <Icon className="brew-Dialog__icon">{getIconVariant()}</Icon>
                        )
                    )}
                    {title && (
                        <Typography className="brew-Dialog__title" variant="h2">{title}</Typography>
                    )}
                    {closeIcon ? closeIcon : (
                        <Icon className="brew-Dialog__closeIcon">close</Icon>
                    )}
                </div>
                <div className="brew-Dialog__body">
                    {children}
                </div>
                {!hideFooter && (
                    <div className="brew-Dialog__footer">
                        {customFooter ? customFooter : (
                            <React.Fragment>
                                {variant !== 'alert' && (
                                    <div className="bregit staw-Dialog__actionButton brew-Dialog__actionButton--cancel">
                                        <Button onClick={handleCancelClick}>{cancelText}</Button>
                                    </div>
                                )}
                                <div className="brew-Dialog__actionButton brew-Dialog__actionButton--confirm">
                                    <Button onClick={handleConfirmClick}>{confirmText}</Button>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body,
    );


}


export default Dialog;
