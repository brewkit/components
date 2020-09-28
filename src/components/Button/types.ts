import * as React from 'react';
import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { ButtonProps } from '@material-ui/core/Button';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        BkButton: {
            loading: React.CSSProperties,
        },
    }
    // allow configuration using `createMuiTheme`
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
