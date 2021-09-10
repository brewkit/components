import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkButton: {
            loading: React.CSSProperties,
        },
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkButton?: {
            loading?: React.CSSProperties,
        },
    }
}


export type Props = ButtonProps & {

    /**
     * If `true`, the button will be disabled and show a spinner.
     * @default false
     */
    loading?: boolean,


    /**
     * @ignore
     */
    classes?: Record<string, any>,

};
