import * as React from 'react';
import MUIAlert, { AlertProps as MUIAlertProps } from '@material-ui/lab/Alert';
import MUIAlertTitle from '@material-ui/lab/AlertTitle';
import { merge } from 'lodash';
import useStyles from './Alert.styles';

export type BkAlertProps = MUIAlertProps & {
    /**
     * An abstraction for `<AlertTitle />`
     */
    title?: string;
};

const Alert = React.forwardRef(
    (props: BkAlertProps, ref: React.Ref<unknown>): React.ReactElement => {
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

Alert.displayName = 'BkAlert';

export default Alert;
