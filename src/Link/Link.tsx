import React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';

export type BkLinkProps = MuiLinkProps;

const Link = React.forwardRef(
    (props: BkLinkProps, ref: React.Ref<HTMLAnchorElement>) => {
        const { children, classes: userClasses, ...otherProps } = props;

        return (
            <MuiLink classes={userClasses} ref={ref} {...otherProps}>
                {children}
            </MuiLink>
        );
    },
);

Link.displayName = 'BkLink';

export default Link;
