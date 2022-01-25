import * as React from 'react';
import { merge } from 'lodash';
import {
    Breadcrumbs as MuiBreadcrumbs,
    BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@material-ui/core';
import useStyles from './Breadcrumbs.styles';

export type BkBreadcrumbsProps = MuiBreadcrumbsProps;

const Breadcrumbs = React.forwardRef(
    (
        props: BkBreadcrumbsProps,
        ref: React.Ref<HTMLElement | never>,
    ): React.ReactElement => {
        const { classes: userClasses = {} } = props;
        const classes = merge(useStyles(), userClasses);

        return <MuiBreadcrumbs classes={classes} ref={ref} {...props} />;
    },
);

Breadcrumbs.displayName = 'BkBreadcrumbs';

export default Breadcrumbs;
