import React, { ReactElement } from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';
import clsx from 'clsx';
import { Props } from './types';


function Tooltip({
    className,
    triggerEvent = 'click',
    content,
    isOpen = false,
    anchor = 'top',
    color = 'primary',
    children,
    ...otherProps
}: Props): ReactElement {


    const [isTooltipOpen] = React.useState(isOpen);
    const wrapperClasses = clsx(
        'brew-Tooltip',
        className,
    );
    const tooltipClasses = clsx(
        [`brew-Tooltip__color--${color}`],
        [`brew-Tooltip__anchor--${anchor}`],
    );


    return (
        <div className={wrapperClasses} {...otherProps}>
            <Flipper flipKey={isOpen}>
                {children}
                {isTooltipOpen && (
                    <Flipped flipId="tooltip">
                        <div className={tooltipClasses}>
                            {content}
                        </div>
                    </Flipped>
                )}
            </Flipper>
        </div>
    );

}


export default Tooltip;
