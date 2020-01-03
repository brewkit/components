import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
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


function Modal(props: Props): ReactElement {
    const { className, children, variant = 'info', open = false, onBackgroundClick, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal',
        { 'brew-Modal--isOpen': Boolean(open) },
        { [`brew-Modal--${variant}`]: Boolean(variant) },
        className,
    );

    const value = React.useMemo(() => ({
        variant,
    }), []);

    if (!open) return null;

    return ReactDOM.createPortal(
        <ModalProvider value={value}>
            <div className={classes} {...otherProps}>
                <div className="brew-Modal__background" onClick={onBackgroundClick} />
                <div className="brew-Modal__content">
                    {children}
                </div>
            </div>
        </ModalProvider>,
        document.body,
    );
}

Modal.Body = ModalBody;
Modal.Button = ModalButton;
Modal.Dialog = ModalDialog;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Icon = ModalIcon;
Modal.Title = ModalTitle;


export default Modal;
