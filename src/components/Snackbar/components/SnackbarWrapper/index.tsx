import React, { ReactElement, ReactNode } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import SnackbarItem from '../SnackbarItem';
import { Snackbar } from '../SnackbarItem/types';
import { Props } from './types';


function SnackbarWrapper({
    snackbars,
}: Props): ReactElement {


    const positions = [
        'topRight',
        'topLeft',
        'topCenter',
        'bottomRight',
        'bottomCenter',
        'bottomLeft',
        'centerLeft',
        'centerRight',
    ];


    function getSnacks(): ReactNode {

        // Create containers for positions
        return positions.map((position: string) => (
            <div className={`brew-Snackbar--${position}`} key={position}>

                {snackbars.map((snack: Snackbar): ReactNode | null => {

                    // Assign snackbars to correct position
                    if (position === snack.position) return (
                        <Flipped flipId={snack.id} key={snack.id}>
                            <SnackbarItem itemConfig={snack} />
                        </Flipped>
                    );

                    return null;
                })}

            </div>));
    }


    return (
        <Flipper flipKey={snackbars.length}>
            {getSnacks()}
        </Flipper>
    );


}


export default SnackbarWrapper;
