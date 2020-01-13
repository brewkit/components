import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { Props } from './types';


/*
 ** Collapsible component uses CSS transitions to smoothly hide and show a block of content.
 */
function Collapsible({
    className,
    anchorContent,
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
        { 'brew-Collapsible__content': collapsed },
        { 'brew-Collapsible--open': !collapsed },
    );


    function toggleContent(): void {
        setCollapsed(!collapsed);
    }


    return (
        <div className={wrapperClasses} {...otherProps}>
            <Flipper flipKey={collapsed}>
                <div className="brew-Collapsible__controller" onClick={toggleContent}>
                    {anchorContent}
                </div>
                <Flipped flipId="children">
                    <div className={contentClasses}>
                        {children}
                    </div>
                </Flipped>
            </Flipper>
        </div>
    );

}


export default Collapsible;
