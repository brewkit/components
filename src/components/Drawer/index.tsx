import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import DrawerItem from './DrawerItem';
import DrawerContext from './context';
import { Props } from './types';


/**
 * The Drawer component is used when you want to have content slide out from either the Top, Right, Bottom, or Left
 */
function Drawer({
    anchorFrom,
    children,
    className,
    isOpen = false,
    onCloseDrawer,
    ...otherProps
}: Props): ReactElement {


    const drawerClasses = clsx(
        'brew-Drawer',
        `brew-Drawer--anchorFrom-${anchorFrom}`,
        { 'brew-Drawer--isOpen': isOpen },
        className,
    );


    return createPortal(
        (
            <DrawerContext.Provider value={{ onCloseDrawer }}>
                <Flipper flipKey={JSON.stringify([anchorFrom, className, isOpen, open])}>
                    <Flipped flipId="wrapper">
                        <div className={drawerClasses} {...otherProps}>
                            <span className="brew-Drawer__exit" onClick={onCloseDrawer}>&times;</span>
                            <div className="brew-Drawer__content">{children}</div>
                        </div>
                    </Flipped>
                    <div className="brew-Drawer__mask" onClick={onCloseDrawer} />
                </Flipper>
            </DrawerContext.Provider>
        ), document.body,
    );


}


Drawer.Item = DrawerItem;


export default Drawer;
