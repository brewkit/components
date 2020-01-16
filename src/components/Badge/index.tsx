/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import clsx from 'clsx';


function Badge({
    children,
    className,
    ...otherProps
}: any): ReactElement {

    const ref = React.useRef(null);
    const badgeClasses = clsx(
        'brew-Badge',
        className,
    );

    console.log(ref);


    return (
        <div className={badgeClasses}>
            {children}
            <span className="brew-Badge__element" {...otherProps} />
        </div>
    );


}


export default Badge;
