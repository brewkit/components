import React, { ReactElement, ReactNode } from 'react';
import { Flipper } from 'react-flip-toolkit';
import SnackbarContainer from './components/SnackbarContainer';
import SnackbarItem from './components/SnackbarItem';
import useSnackbar from './hooks';
import SnackbarContext from './context';
import { Action, PositionsObject, State, Snackbar } from './types';


function SnackbarProvider({
    children,
    maxSnackbars,
}: any): ReactElement {


    const [state, dispatch] = React.useReducer((currentState: State, action: Action): State => {


        const { key, snack, type } = action;
        if (snack) snack.key = snack.key ? snack.key : new Date().getTime();


        switch (type) {


        case 'add':

            return {
                ...currentState,
                queue: [...currentState.queue, snack],
            } as State;

        case 'remove':

            return {
                ...currentState,
                snackbars: currentState.snackbars.filter((snackbar: any) => snackbar.key !== key),
            };

        case 'processQueue':

            return {
                ...currentState,
                queue: currentState.queue.slice(1, currentState.queue.length),
                snackbars: [...currentState.snackbars, currentState.queue[0]],
            };

        default:

            throw new Error();

        }


    }, { queue: [], snackbars: [] });


    const positions = state.snackbars.reduce((acc: PositionsObject, current: Snackbar): PositionsObject => {


        if (!current.position) current.position = 'topRight';

        const category = current.position;
        const existingOfCategory = acc[category] ?? [];


        return {
            ...acc,
            [category]: [...existingOfCategory, current],
        };

    }, {});


    function createContainers(): ReactNode {

        return Object.entries(positions).map(([position, snacks]: any): ReactElement => (

            <SnackbarContainer key={position} position={position}>
                {snacks.map((snack: any) => (
                    <SnackbarItem key={snack.key} snack={snack} />
                ))}
            </SnackbarContainer>

        ));

    }


    function enqueue(snack: any): void {
        dispatch({ snack, type: 'add' });
    }


    function remove(key: number | string): void {
        dispatch({ key, type: 'remove' });
    }


    React.useEffect(() => {

        if (state.snackbars.length < maxSnackbars && state.queue.length > 0) dispatch({ type: 'processQueue' });

    }, [state.snackbars.length, state.queue.length]);


    const context = {
        enqueue,
        remove,
    };


    return (
        <SnackbarContext.Provider value={context}>
            {children}
            <Flipper flipKey={state.snackbars.length}>
                {createContainers()}
            </Flipper>
        </SnackbarContext.Provider>
    );
}


export default SnackbarProvider;
export { useSnackbar };
