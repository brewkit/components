import * as React from 'react';
import MUIAlert, { AlertProps as MUIAlertProps } from '@material-ui/lab/Alert';
import MUIAlertTitle from '@material-ui/lab/AlertTitle';
import useStyles from './Alert.styles';
import { merge } from 'lodash';

export type BkAlertProps = MUIAlertProps & {
    /**
     * An abstraction for `<AlertTitle />`
     */
    title?: string;
};

const Alert = React.forwardRef(
    (props: BkAlertProps, ref: React.Ref<any>): React.ReactElement => {
        const { classes: userClasses, title, children, ...otherProps } = props;
        const classes = merge(useStyles(), userClasses);

        return (
            <MUIAlert classes={classes} ref={ref} {...otherProps}>
                {title && <MUIAlertTitle>{title}</MUIAlertTitle>}
                {children}
            </MUIAlert>
        );
    },
);

Alert.displayName = 'Alert';

export default Alert;
