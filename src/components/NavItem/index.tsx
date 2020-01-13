import React, { ReactElement } from 'react';
import clsx from 'clsx';
import DrawerContext from '../Drawer/context';
import { Props } from './types';


function NavItem({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const { setIsOpen } = React.useContext(DrawerContext);

    const drawerItemClasses = clsx(
        'brew-NavItem',
        className,
    );


    function closeDrawer(): void {
        setIsOpen(false);
    }


    return (
        <div className={drawerItemClasses} onClick={closeDrawer} {...otherProps}>
            {children}
        </div>
    );


}


export default NavItem;
