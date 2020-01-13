import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function DrawerItem({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const drawerItemClasses = clsx(
        'brew-Draweritem',
        className,
    );


    return (
        <div className={drawerItemClasses} {...otherProps}>
            {children}
        </div>
    );


}


export default DrawerItem;
