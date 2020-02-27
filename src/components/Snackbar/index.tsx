import React from 'react';
import SnackbarContext from './context';
import useSnackbar from './hooks/useSnackbar';
import SnackbarContent from './components/SnackbarContent';
import { } from './types';


const SnackbarProvider = ({
    children,
}: any): React.ReactElement => {


    const [snacks, setSnacks] = React.useState<any[]>([]);


    const add = (snack: any): void => {
        setSnacks((prevSnacks: any) => [...prevSnacks, snack]);
    };


    const context = {
        add,
    };

    return (
        <SnackbarContext.Provider value={context}>
            {children}
            <SnackbarContent snacks={snacks} />
        </SnackbarContext.Provider>
    );


};


export default SnackbarProvider;
export { useSnackbar };
