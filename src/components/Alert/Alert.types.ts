import { AlertProps as MUIAlertProps } from '@material-ui/lab/Alert';

export type AlertProps = MUIAlertProps & {
    /**
     * An abstraction for `<AlertTitle />`
     */
    title?: string,

};
