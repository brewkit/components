import React, { ReactElement } from 'react';

const ModalContext = React.createContext(null);

export const ModalProvider = (props: any): ReactElement => {
    const { children } = props;
    const onClose = React.useRef(null);

    const setOnClose = (newOnClose: (any) => any): void => {
        onClose.current = newOnClose;
    };

    const value = React.useMemo(() => ({
        onClose,
        setOnClose,
    }), [onClose]);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): object => React.useContext(ModalContext);
