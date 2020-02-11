import React from 'react';


interface ContextType {
    enqueue: (enqueue: any) => void,
}
export const SnackbarContext = React.createContext<Partial<ContextType>>({});
