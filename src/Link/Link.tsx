import React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';

export type BkLinkProps = MuiLinkProps;

const Link = React.forwardRef(
    (props: BkLinkProps, ref: React.Ref<HTMLAnchorElement>) => {
        const { children, classes: userClasses, ...otherProps } = props;

        return <MuiLink {...otherProps}>{children}</MuiLink>;
    },
);

Link.displayName = 'Link';

export default Link;
