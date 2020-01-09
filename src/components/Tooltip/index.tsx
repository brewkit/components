import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


function Tooltip({
    className,
    content,
    anchor,
    color,
    children,
    ...otherProps
}: Props): ReactElement {


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
            {children}
            <div className={tooltipClasses}>
                {content}
            </div>
        </div>
    );

}


export default Tooltip;
