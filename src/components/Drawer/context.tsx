import React from 'react';


interface ContextType {
    onCloseDrawer: () => void,
}


const DrawerContext = React.createContext<Partial<ContextType>>({});


export default DrawerContext;
