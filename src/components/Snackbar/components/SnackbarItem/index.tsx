import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped } from 'react-flip-toolkit';
import { useSnackbar } from '../../index';
import { Props } from './types';


function SnackbarItem({
    className,
    snack,
}: Props): ReactElement {


    const { remove } = useSnackbar();
    const timer = React.useRef<number>();

    if (!snack.duration) snack.duration = 5;


    const snackClasses = clsx(
        'brew-SnackbarItem',
        `brew-SnackbarItem--${snack.color}`,
        className,
    );


    const handleClose = (key: any): void => {
        remove(key);
    };


    React.useEffect(() => {

        if (snack.duration) timer.current = window.setTimeout(() => remove(snack.key), snack.duration * 1000);


        return (): void => {
            clearTimeout(timer.current);
        };

    }, []);


    return (
        <Flipped flipId={snack.key}>
            <div className={snackClasses}>
                <div className="brew-SnackbarItem__content">{snack.content}</div>
                {snack.isCloseable && (
                    <span
                        className="brew-SnackbarItem__close"
                        onClick={(): void => handleClose(snack.key)}>
                        &times;
                    </span>
                )}
            </div>
        </Flipped>
    );
}


export default SnackbarItem;
