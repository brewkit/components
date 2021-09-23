import * as React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkTextField: {
            searchIcon: React.CSSProperties,
            visibilityIcon: React.CSSProperties,
            menu: React.CSSProperties,
            menuItem: React.CSSProperties,
            activeMenuItem: React.CSSProperties,
        },
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkTextField?: {
            searchIcon?: React.CSSProperties,
            visibilityIcon?: React.CSSProperties,
            menu?: React.CSSProperties,
            menuItem?: React.CSSProperties,
            activeMenuItem?: React.CSSProperties,
        },
    }
}


export type Props = TextFieldProps & {

    options?: {
        label: React.ReactNode,
        value: any,
        hidden?: boolean,
    }[],

    /**
     * @ignore
     */
    classes?: Record<string, any>,

};
