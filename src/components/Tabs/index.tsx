import React from 'react';
import clsx from 'clsx';
import { TabContext } from './context';
import { Props } from './types';


/**
 * The `<Tabs />` component serves as a wrapper for multiple child `<Tab />` components.
 */
const Tabs = React.forwardRef(({
    component: Component = 'div',
    className,
    onChange,
    value = 0,
    shouldPreserveContent = false,
    children,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-Tabs',
        className,
    );


    return (
        <Component {...otherProps} className={classes} ref={ref}>
            <TabContext.Provider value={{
                value,
                onChange,
                shouldPreserveContent,
            }}>
                {children}
            </TabContext.Provider>
        </Component>
    );


});


export default Tabs;
