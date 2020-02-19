import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped } from 'react-flip-toolkit';
import SnackbarContext from '../../context';


function SnackbarItem({
    className,
    snack,
}: any): ReactElement {


    const timer = React.useRef<number>();


    const snackbar: any = React.useContext(SnackbarContext);


    const snackClasses = clsx(
        'brew-Snackbar__item',
        className,
    );


    const handleClose = (key: any): void => {
        if (snackbar) snackbar.remove(key);
    };


    React.useEffect(() => {

        if (snack.duration) timer.current = window.setTimeout(() => snackbar.remove(snack.key), snack.duration * 1000);


        return (): void => {
            clearTimeout(timer.current);
        };

    }, []);


    return (
        <Flipped flipId={snack.key}>
            <div className={snackClasses}>
                {snack.content}
                <span onClick={(): void => handleClose(snack.key)}>&times;</span>
            </div>
        </Flipped>
    );
}


export default SnackbarItem;
