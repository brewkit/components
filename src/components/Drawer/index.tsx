import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import DrawerItem from './components/DrawerItem';
import { Props } from './types';


function Drawer({
    anchorFrom,
    children,
    className,
    isOpen = false,
    ...otherProps
}: Props): ReactElement {


    const drawerClasses = clsx(
        'brew-Drawer',
        `brew-Drawer--anchorFrom-${anchorFrom}`,
        { 'brew-Drawer--isOpen': isOpen },
        className,
    );


    return (
        <Flipper flipKey={JSON.stringify([anchorFrom, isOpen, className])}>
            <Flipped flipId="wrapper" spring="wobbly">
                <div className={drawerClasses} {...otherProps}>
                    {children}
                </div>
            </Flipped>
        </Flipper>
    );


}


Drawer.Item = DrawerItem;


export default Drawer;
