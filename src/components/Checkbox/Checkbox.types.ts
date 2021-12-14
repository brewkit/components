import { CheckboxProps } from '@material-ui/core/Checkbox';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkCheckbox: {
            controlBase: string;
            uncheckedControl: string;
            checkedControl: string;
        };
    }
    interface ThemeOptions {
        BkCheckbox?: {
            controlBase?: string;
            uncheckedControl?: string;
            checkedControl?: string;
        };
    }
}

export type Props = CheckboxProps & {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default "primary"
     */

    color?: 'default' | 'primary' | 'secondary';
    classes?: Record<string, any>;
};
