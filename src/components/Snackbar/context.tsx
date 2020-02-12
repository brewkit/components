import React from 'react';


interface ContextType {
    enqueue: (enqueue: any) => void,
    close: (id?: number) => void,
}


export const SnackbarContext = React.createContext<Partial<ContextType>>({});
