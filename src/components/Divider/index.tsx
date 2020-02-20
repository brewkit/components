import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props } from './types';


/**
 * The `<Divider />` is used to break up content or provide a visual break. It can optionally hold
 * content or a message.
 */
function Divider({
    align = 'center',
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Divider',
        `brew-Divider--align-${align}`,
        { 'brew-Divider--isChildless': Boolean(!children) },
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {children ? (
                <React.Fragment>
                    <hr />
                    <Typography variant="subtitle1">{children}</Typography>
                    <hr />
                </React.Fragment>
            ) : (
                <hr />
            )}
        </div>
    );


}


export default Divider;
