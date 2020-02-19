import React from 'react';


interface ContextType {
    enqueue: (enqueue: any) => void,
    remove: (key: number | string) => void,
}


const SnackbarContext = React.createContext<Partial<ContextType>>({});


export default SnackbarContext;
