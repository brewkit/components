import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { CheckboxProps } from '@material-ui/core/Checkbox';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        BkCheckbox: {
            controlBase: React.CSSProperties,
            uncheckedControl: React.CSSProperties,
            checkedControl: React.CSSProperties,
        },
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        BkCheckbox?: {
            controlBase?: React.CSSProperties,
            uncheckedControl?: React.CSSProperties,
            checkedControl?: React.CSSProperties,
        },
    }
}


export interface Props extends CheckboxProps {

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default "primary"
     */
    color?: 'default' | 'primary' | 'secondary',

    /**
     * @ignore
     */
    classes: Record<string, any>,

}
