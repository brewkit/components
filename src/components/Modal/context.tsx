import React, { ReactElement, ReactNode } from 'react';

const ModalContext = React.createContext(null);

export const ModalProvider = (props: { value: object, children: ReactNode, }): ReactElement => {
    const { value, children } = props;

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): object => React.useContext(ModalContext);
