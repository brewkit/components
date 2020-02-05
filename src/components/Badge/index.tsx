import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The Badge component is used to attach content to it's child or can be used inline with no children
 */
function Badge({
    anchorFrom = 'top-right',
    children,
    className,
    color = 'info',
    content,
    isCircular = false,
    ...otherProps
}: Props): ReactElement {


    const badgeClasses = clsx(
        'brew-Badge',
        `brew-Badge--anchorFrom-${anchorFrom}`,
        `brew-Badge--color-${color}`,
        { 'brew-Badge--isCircular': isCircular },
        { 'brew-Badge--inline': !children },
        className,
    );


    return (
        <div className={badgeClasses}>
            {children}
            <span className="brew-Badge__element" {...otherProps}>{content}</span>
        </div>
    );


}


export default Badge;
