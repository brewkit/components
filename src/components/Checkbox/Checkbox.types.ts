
import * as React from 'react';
import { CheckboxProps } from '@material-ui/core/Checkbox';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkCheckbox: {
            controlBase: React.CSSProperties,
            uncheckedControl: React.CSSProperties,
            checkedControl: React.CSSProperties,
        },
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkCheckbox?: {
            controlBase?: React.CSSProperties,
            uncheckedControl?: React.CSSProperties,
            checkedControl?: React.CSSProperties,
        },
    }
}


export type Props = CheckboxProps & {

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default "primary"
     */
    color?: 'default' | 'primary' | 'secondary',

    /**
     * @ignore
     */
    classes?: Record<string, any>,

};
