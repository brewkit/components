import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { ModalProvider } from './context';
import ModalBody from './components/ModalBody';
import ModalButton from './components/ModalButton';
import ModalDialog from './components/ModalDialog';
import ModalFooter from './components/ModalFooter';
import ModalHeader from './components/ModalHeader';
import ModalIcon from './components/ModalIcon';
import ModalTitle from './components/ModalTitle';
import { Props } from './types';


function ModalContent(props: Props): ReactElement {
    const { className, children, open, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal',
        className,
    );

    if (!open) return null;

    return (
        <div className={classes} {...otherProps}>
            <ModalDialog>
                {children}
            </ModalDialog>
        </div>
    );
}

const Modal = (props: Props): ReactElement & object => (
    <ModalProvider>
        <ModalContent {...props} />
    </ModalProvider>
);

Modal.Body = ModalBody;
Modal.Button = ModalButton;
Modal.Dialog = ModalDialog;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Icon = ModalIcon;
Modal.Title = ModalTitle;

export default Modal;
