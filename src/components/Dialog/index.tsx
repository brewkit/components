import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import DialogBody from './components/DialogBody';
import DialogButton from './components/DialogButton';
import DialogFooter from './components/DialogFooter';
import DialogHeader from './components/DialogHeader';
import DialogIcon from './components/DialogIcon';
import DialogTitle from './components/DialogTitle';
import { Props } from './types';


function Dialog({ 
    className, 
    children, 
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

    if (!open) return null;

    return ReactDOM.createPortal(
        <div className={classes} {...otherProps}>
            <div className="brew-Dialog__background" onClick={onBackgroundClick} />
            <div className="brew-Dialog__content">
                {children}
            </div>
        </div>,
        document.body,
    );
}

Dialog.Body = DialogBody;
Dialog.Button = DialogButton;
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Icon = DialogIcon;
Dialog.Title = DialogTitle;


export default Dialog;
