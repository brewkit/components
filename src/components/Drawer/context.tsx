import React, { ReactElement, ReactNode } from 'react';


declare interface ProviderProps {
    children: ReactNode
}


const DrawerContext = React.createContext(null);

const DrawerProvider = ({ children }: ProviderProps): ReactElement => {
    const [isOpen, setIsOpen] = React.useState(true);


    return (
        <DrawerContext.Provider value={{
            isOpen,
            setIsOpen,
        }}>
            {children}
        </DrawerContext.Provider>
    );
};


const useDrawerContext = (): any => React.useContext(DrawerContext);


export default DrawerContext;
export { useDrawerContext, DrawerProvider };
