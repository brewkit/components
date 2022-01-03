import * as React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import MuiAlertTitle from '@material-ui/lab/AlertTitle';
import { AlertProps } from './Alert.types';


/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the
 * user's task.
 *
 * [Material-UI Docs](https://material-ui.com/components/alert/)
 *
 * ## Differences in Brewkit:
 *
 * - Adds a `title` prop that can be used in place of `<AlertTitle />`.
 */
export const Alert = React.forwardRef(({
    title,
    children,
    ...otherProps
}: AlertProps, ref: React.Ref<any>): React.ReactElement => (


    <MuiAlert ref={ref} {...otherProps}>
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {children}
    </MuiAlert>


));


Alert.displayName = 'Alert';


export default Alert;
