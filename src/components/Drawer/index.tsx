import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
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
    ...otherProps
}: Props): ReactElement {


    const [open, setOpen] = React.useState(isOpen);


    React.useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);


    const wrapperClasses = clsx(
        'brew-Drawer',
        className,
    );


    const drawerClasses = clsx(
        'brew-Drawer__element',
        `brew-Drawer--anchorFrom-${anchorFrom}`,
        { 'brew-Drawer--isOpen': open },
    );


    function closeDrawer(): void {
        setOpen(false);
    }


    return (
        <DrawerContext.Provider value={{ setOpen }}>
            <div className={wrapperClasses} {...otherProps}>
                <Flipper flipKey={JSON.stringify([anchorFrom, open, className])}>
                    <Flipped flipId="wrapper">
                        <div className={drawerClasses}>
                            <span className="brew-Drawer__exit" onClick={closeDrawer}>&times;</span>
                            <div className="brew-Drawer__content">{children}</div>
                        </div>
                    </Flipped>
                    <div className="brew-Drawer__mask" onClick={closeDrawer} />
                </Flipper>
            </div>
        </DrawerContext.Provider>
    );


}


export default Drawer;
