import React from 'react';
import MuiCard from '@material-ui/core/Card';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * The `<Card /> component is a surface that displays content and actions on a single surface.
 */
export const Card = React.forwardRef(({
    actions,
    children,
    header,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-Card',
    };


    return (
        <MuiCard classes={classes} ref={ref} {...otherProps}>
            {header && (
                <div className="brew-Card__header">
                    {header}
                </div>
            )}
            <div className="brew-Card__content">
                {children}
            </div>
            {actions && (
                <div className="brew-Card__actions">
                    {actions}
                </div>
            )}
        </MuiCard>
    );


});


Card.displayName = 'Card';


export default Card;
