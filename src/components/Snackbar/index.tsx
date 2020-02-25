import React from 'react';
import { Flipper } from 'react-flip-toolkit';
import SnackbarContent from './components/SnackbarContent';
import SnackbarContext from './context';
import useSnackbar from './hooks/useSnackbar';
import { Action, PositionsObject, Snackbar, State } from './types';


const SnackbarProvider = ({
    children,
    maxSnackbars,
}: any): React.ReactElement => {


    const [state, dispatch] = React.useReducer((currentState: State, action: Action): State => {


        const { key, snack, type } = action;
        if (snack) snack.key = snack.key ? snack.key : new Date().getTime() + Math.random();


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


        if (!current.position) current.position = 'top-right';

        const category = current.position;
        const existingOfCategory = acc[category] ?? [];


        return {
            ...acc,
            [category]: [...existingOfCategory, current],
        };


    }, {});


    const createContainers = (): React.ReactNode => (
        Object.entries(positions).map(([position, snacks]: any): React.ReactElement => (

            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <div className={`brew-Snackbar brew-Snackbar--${position}`} key={position}>
                {snacks.map((snack: any) => (
                    <SnackbarContent key={snack.key} snack={snack} />
                ))}
            </div>))
    );


    const enqueue = (snack: Snackbar): void => {
        dispatch({ snack, type: 'add' });
    };


    const remove = (key: React.Key): void => {
        dispatch({ key, type: 'remove' });
    };


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


};


export default SnackbarProvider;
export { useSnackbar };
