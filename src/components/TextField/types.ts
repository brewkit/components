import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { TextFieldProps } from '@material-ui/core/TextField';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        BkTextField: {
            searchIcon: React.CSSProperties,
            visibilityIcon: React.CSSProperties,
            menu: React.CSSProperties,
            menuItem: React.CSSProperties,
            activeMenuItem: React.CSSProperties,
        },
    }
    // allow configuration using `createMuiTheme`
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
