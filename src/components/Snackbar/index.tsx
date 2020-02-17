import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import SnackbarContext from './context';


function SnackbarProvider({
    children,
}: any): ReactElement {


    const [snackbars, setSnackbars] = React.useState([{ content: '1', key: '1', position: 'topRight' }]);


    const containers = [
        'topLeft',
        'topCenter',
        'topRight',
        'centerRight',
        'bottomRight',
        'bottomCenter',
        'bottomLeft',
        'centerLeft',
    ];

    function createContainers(): ReactNode {


        return containers.map((container: string): ReactNode => {


            const snackbarContainerClasses = clsx(
                'brew-Snackbar',
                `brew-Snackbar--${container}`,
            );


            return snackbars.map((snack: any): ReactNode => {

                if (snack.position === container) return ReactDOM.createPortal(
                    (
                        <div className={snackbarContainerClasses} key={container}>
                            <div className="brew-Snackbar__item" key={snack.key}>
                                {snack.content}
                            </div>
                        </div>
                    )
                    , document.body,
                );

                return null;
            });


        });


    }


    function add(snack: any): void {
        setSnackbars((previousState: any): any => [...previousState, snack]);
    }

    function remove(key: string): void {
        setSnackbars((previousState: any): any => previousState.filter((snack: any) => snack.key !== key));
    }

    const context = {
        add,
        remove,
    };


    return (
        <SnackbarContext.Provider value={context}>
            {children}
            {createContainers()}
        </SnackbarContext.Provider>
    );
}


export default SnackbarProvider;
