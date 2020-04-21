import React from 'react';
import {
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader,
    CardActions as MuiCardActions,
} from '@material-ui/core';
import CardMedia from './components/CardMedia';
import { Props } from './types';


export const Card = React.forwardRef(({
    actions,
    children,
    contentComponent = 'div',
    customContentBefore,
    customContentAfter,
    headerAction,
    headerAvatar,
    headerComponent = 'div',
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
            {headerTitle && (
                <MuiCardHeader
                    action={headerAction}
                    avatar={headerAvatar}
                    classes={headerClasses}
                    component={headerComponent}
                    subheader={headerSubtitle}
                    title={headerTitle}
                />
            )}
            {customContentBefore}
            {children && (
                <MuiCardContent className="brew-Card__content" component={contentComponent}>
                    {children}
                </MuiCardContent>
            )}
            {customContentAfter}
            {actions && (
                <MuiCardActions className="brew-Card__actions">
                    {actions}
                </MuiCardActions>
            )}
        </MuiCard>
    );


});


Card.displayName = 'Card';


export default Card;
export { CardMedia };
