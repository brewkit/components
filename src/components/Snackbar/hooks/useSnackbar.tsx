import React from 'react';
import SnackbarContext from '../context';


function useSnackbar(): any {


    const snackbar = React.useContext(SnackbarContext);


    if (snackbar.enqueue && snackbar.remove) return {
        enqueue: snackbar.enqueue,
        remove: snackbar.remove,
    };


    return null;


}


export default useSnackbar;
