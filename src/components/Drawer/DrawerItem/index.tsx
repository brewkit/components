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


    const { setOpen } = React.useContext(DrawerContext);


    const drawerItemClasses = clsx(
        'brew-Drawer__item',
        className,
    );


    function closeDrawer(): void {
        setOpen(false);
    }


    return (
        <div className={drawerItemClasses} onClick={closeDrawer} {...otherProps}>
            {children}
        </div>
    );


}


export default DrawerItem;
