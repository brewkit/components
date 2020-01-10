import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Button from '../Button';
import Icon from '../Icon';
import Typography from '../Typography';
import { Props } from './types';


function Dialog({
    className,
    children,
    closeIcon,
    onConfirm,
    onCancel,
    footer,
    confirmText,
    cancelText,
    title,
    variant = 'info',
    open = false,
    onBackgroundClick,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Dialog',
        { 'brew-Dialog--isOpen': Boolean(open) },
        { [`brew-Dialog--${variant}`]: Boolean(variant) },
        className,
    );

    const handleConfirmClick = (event: Event): void => {
        if (onConfirm) onConfirm(event);
    };

    const handleCancelClick = (event: Event): void => {
        if (onCancel) onCancel(event);
    };

    if (!open) return null;

    return ReactDOM.createPortal(
        <div className={classes} {...otherProps}>
            <div className="brew-Dialog__background" onClick={onBackgroundClick} />
            <div className="brew-Dialog__content">
                <div className="brew-Dialog__header">
                    {title && (
                        <Typography as="h2" className="brew-Dialog__title">{title}</Typography>
                    )}
                    {closeIcon ? closeIcon : (
                        <Icon className="brew-Dialog__closeIcon">close</Icon>
                    )}
                </div>
                <div className="brew-Dialog__body">
                    {children}
                </div>
                {footer !== null && (
                    <div className="brew-Dialog__footer">
                        {footer ? footer : (
                            <React.Fragment>
                                <Button className="brew-Dialog__actionButton brew-Dialog__actionButton--cancel" onClick={handleCancelClick}>{cancelText || 'Cancel'}</Button>
                                <Button className="brew-Dialog__actionButton brew-Dialog__actionButton--confirm" onClick={handleConfirmClick}>{confirmText || 'Confirm'}</Button>
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
