import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { Props } from './types';


function Collapsible({
    className,
    anchor,
    isCollapsed = true,
    children,
    ...otherProps
}: Props): ReactElement {


    const [collapsed, setCollapsed] = React.useState(isCollapsed);

    const wrapperClasses = clsx(
        'brew-Collapsible',
        className,
    );

    const contentClasses = clsx(
        {['brew-Collapsible--content']: collapsed},
        {['brew-Collapsible--open']: !collapsed},
    );


    function toggleContent() {
        setCollapsed(collapsed => !collapsed);
    }


    return (
        <Flipper flipKey={collapsed}>
            <div className={wrapperClasses} {...otherProps}>
                <div className="brew-Collapsible--controller" onClick={toggleContent}>
                    {anchor}
                </div>
                <Flipped flipId="children">
                    <div className={contentClasses}>
                        {children}
                    </div>
                </Flipped>
            </div>
        </Flipper>
    );

}


export default Collapsible;
