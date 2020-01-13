import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { useDrawerContext } from './context';
import { Props } from './types';


function Drawer({
    anchorFrom,
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const { isOpen, setIsOpen } = useDrawerContext();

    const drawerClasses = clsx(
        'brew-Drawer',
        `brew-Drawer--anchorFrom-${anchorFrom}`,
        { 'brew-Drawer--isOpen': isOpen },
        className,
    );


    function closeDrawer(): void {
        setIsOpen(false);
    }


    return (
        <Flipper flipKey={JSON.stringify([anchorFrom, isOpen, className])}>
            <Flipped flipId="wrapper">
                <div className={drawerClasses} {...otherProps}>
                    <span className="brew-Drawer__exit" onClick={closeDrawer}>&times;</span>
                    <div className="brew-Drawer__content">{children}</div>
                </div>
            </Flipped>
            <div className="brew-Drawer__mask" />
        </Flipper>
    );


}


export default Drawer;
