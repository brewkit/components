import React from 'react';
import {
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader,
    CardActions as MuiCardActions,
} from '@material-ui/core';
import { Props } from './types';


export const Card = React.forwardRef(({
    actions,
    children,
    className,
    contentComponent = 'div',
    headerAction,
    headerAvatar,
    headerComponent = 'div',
    headerContent,
    headerSubtitle,
    headerTitle,
    isRaised,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const headerClasses = {
        root: 'brew-Card__header',
        avatar: 'brew-Card__headerAvatar',
        action: 'brew-Card__headerAction',
        content: 'brew-Card__headerContent',
        title: 'brew-Card__headerTitle',
        subheader: 'brew-Card__headerSubtitle',
    };


    return (
        <MuiCard className="brew-Card" raised={isRaised} {...otherProps}>
            {headerContent && (
                <MuiCardHeader
                    action={headerAction}
                    avatar={headerAvatar}
                    classes={headerClasses}
                    component={headerComponent}
                    subheader={headerSubtitle}
                    title={headerTitle}
                >
                    {headerContent}
                </MuiCardHeader>
            )}
            <MuiCardContent className="brew-Card__content" component={contentComponent}>
                {children}
            </MuiCardContent>
            {actions && (
                <MuiCardActions>
                    {actions}
                </MuiCardActions>
            )}
        </MuiCard>
    );


});


Card.displayName = 'Card';


export default Card;
