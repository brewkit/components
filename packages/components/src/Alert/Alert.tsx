import * as React from 'react';
import MUIAlert, { AlertProps as MUIAlertProps } from '@material-ui/lab/Alert';
import MUIAlertTitle from '@material-ui/lab/AlertTitle';

export type BkAlertProps = MUIAlertProps & {
  /**
   * An abstraction for `<AlertTitle />`
   */
  title?: string;
};

export const Alert = React.forwardRef(
  (
    { title, children, ...otherProps }: BkAlertProps,
    ref: React.Ref<any>
  ): React.ReactElement => (
    <MUIAlert ref={ref} {...otherProps}>
      {title && <MUIAlertTitle>{title}</MUIAlertTitle>}
      {children}
    </MUIAlert>
  )
);

Alert.displayName = 'Alert';

export default Alert;
