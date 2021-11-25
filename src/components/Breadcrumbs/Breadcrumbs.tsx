import * as React from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import useStyles from './Breadcrumbs.styles';


/**
 * Breadcrumbs allow users to make selections from a range of values.
 *
 * [Material-UI Docs](https://mui.com/components/breadcrumbs/)
 *
 * > No differences in Brewkit.
 */
const Breadcrumbs = React.forwardRef((props: BreadcrumbsProps, ref: React.Ref<any>): React.ReactElement => {
    const classes = useStyles();
    return <MuiBreadcrumbs className={classes.root} ref={ref} {...props} />;
});

Breadcrumbs.displayName = 'Breadcrumbs';


export default Breadcrumbs;
