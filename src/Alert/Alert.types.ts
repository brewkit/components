import { AlertProps as MUIAlertProps } from '@material-ui/lab/Alert';

export type BkAlertProps = MUIAlertProps & {
    /**
     * An abstraction for `<AlertTitle />`
     */
    title?: string;
};
