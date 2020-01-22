import React, { ReactElement } from 'react';
import clsx from 'clsx';


function Badge({
    children,
    className,
    content,
    ...otherProps
}: any): ReactElement {


    const badgeClasses = clsx(
        'brew-Badge',
        { 'brew-Badge--what': !children },
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
