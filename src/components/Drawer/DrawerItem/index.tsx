import React, { ReactElement } from 'react';
import clsx from 'clsx';
import DrawerContext from '../context';
import { Props } from './types';


/**
 * The DrawerItem component is used in a Drawer component that has the native ability to close the Drawer when clicked
 */
function DrawerItem({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const { onCloseDrawer } = React.useContext(DrawerContext);


    const drawerItemClasses = clsx(
        'brew-Drawer__item',
        className,
    );


    return (
        <div className={drawerItemClasses} onClick={onCloseDrawer} {...otherProps}>
            {children}
        </div>
    );


}


export default DrawerItem;
