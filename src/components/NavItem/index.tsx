import React, { ReactElement } from 'react';
import clsx from 'clsx';
import DrawerContext from '../Drawer/context';
import { Props } from './types';


/**
 * NavItem has access to DrawerContext, which has built in functionality to close the Drawer when clicked.
 */
function NavItem({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const context = React.useContext(DrawerContext);


    const drawerItemClasses = clsx(
        'brew-NavItem',
        className,
    );


    function closeDrawer(): void {
        if (context !== null) context.setOpen(false);
    }


    return (
        <div className={drawerItemClasses} onClick={closeDrawer} {...otherProps}>
            {children}
        </div>
    );


}


export default NavItem;
