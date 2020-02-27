import React from 'react';


interface ContextType {
    add: (snack: any) => void,
    remove: (key: React.Key) => void,
}


const SnackbarContext = React.createContext<Partial<ContextType>>({});


export default SnackbarContext;
