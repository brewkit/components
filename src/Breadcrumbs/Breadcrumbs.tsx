import * as React from 'react';
import {
    Breadcrumbs as MuiBreadcrumbs,
    BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@material-ui/core';
import useStyles from './Breadcrumbs.styles';
import { merge } from 'lodash';

type BkBreadcrumbsProps = MuiBreadcrumbsProps;

const Breadcrumbs = React.forwardRef(
    (
        props: BkBreadcrumbsProps,
        ref: React.Ref<HTMLDivElement>,
    ): React.ReactElement => {
        const { classes: userClasses = {} } = props;
        const classes = merge(useStyles(), userClasses);

        return <MuiBreadcrumbs className={classes.root} ref={ref} {...props} />;
    },
);

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
