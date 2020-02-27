import React from 'react';
import SnackbarContext from '../context';


function useSnackbar(): any {


    const snackbar = React.useContext(SnackbarContext);


    if (snackbar.add) return {
        add: snackbar.add,
    };


    return null;


}


export default useSnackbar;
