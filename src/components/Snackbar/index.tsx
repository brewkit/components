/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { ReactElement } from 'react';
import SnackbarWrapper from './components/SnackbarWrapper';
import { SnackbarContext } from './context';


function SnackbarProvider({
    children,
}: any): ReactElement {


    const [state, dispatch] = React.useReducer((currentState: any, action: any) => {


        switch (action.type) {


        case 'add':

            if (!action.snackbarConfig) throw new Error('Must supply a config object when adding a snackbar');

            return {
                ...currentState,
                id: currentState.id + 1,
                snackbars: [
                    ...currentState.snackbars,
                    {
                        ...action.snackbarConfig,
                        id: currentState.id,
                        isLive: false,
                    },
                ],
            };


        case 'enqueue':

            if (!action.id) throw new Error('Must supply an ID when enqueueing a snackbar');

            return {
                ...currentState,
                snackbars: currentState.snackbars.map((snackbar: any) => (
                    snackbar.id === action.id ? { ...snackbar, isLive: true } : snackbar)),
            };


        case 'clear':

            if (!action.id) throw new Error('You must supply an ID when clearing a snackbar');

            return {
                ...currentState,
                snackbars: currentState.snackbars.filter((snackbar: any) => snackbar.id !== action.id),
            };


        default:
            throw new Error();
        }


    }, {
        id: 1,
        snackbars: [],
    });


    const { snackbars } = state;


    const liveSnackbars = snackbars.filter((snackbar: any) => snackbar.isLive);


    const snackbarQueue = snackbars.filter((snackbar: any) => !snackbar.isLive);


    const enqueueSnackbar = React.useCallback((snackbarConfig: any) => {
        if (snackbarConfig) dispatch({ snackbarConfig, type: 'add' });
    }, []);


    const context = React.useMemo(() => ({ enqueue: enqueueSnackbar }), []);


    React.useEffect(() => {
        if (liveSnackbars.length < 3 && snackbarQueue.length > 0) {
            const { id, lifespan = 5 } = snackbarQueue.slice().shift();
            dispatch({ id, type: 'enqueue' });
            if (lifespan) setTimeout(() => {
                dispatch({ id, type: 'clear' });
            }, lifespan * 1000);

        }
    }, [snackbarQueue.length, liveSnackbars.length]);


    return (
        <SnackbarContext.Provider value={context}>
            {children}
            <SnackbarWrapper snackbars={liveSnackbars} />
        </SnackbarContext.Provider>
    );


}

export default SnackbarProvider;
