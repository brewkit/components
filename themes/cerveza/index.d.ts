declare module "variables" {
    export const color: {
        brand: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        blueGray: {
            darkest: string;
            darker: string;
            dark: string;
            main: string;
            light: string;
            lighter: string;
            lightest: string;
        };
        gray: {
            darkest: string;
            darker: string;
            dark: string;
            main: string;
            light: string;
            lighter: string;
            lightest: string;
        };
        blue: {
            dark: string;
            main: string;
            light: string;
            lighter: string;
            lightest: string;
        };
        orange: {
            dark: string;
            main: string;
            light: string;
            lighter: string;
        };
        accent: {
            success: string;
            info: string;
            warning: string;
            error: string;
            shared: string;
        };
    };
    export const size: {
        xxsmall: string;
        xsmall: string;
        small: string;
        normal: string;
        large: string;
        xlarge: string;
        xxlarge: string;
    };
}
declare module "components/Typography" {
    const Typography: {
        typography: {
            fontSize: number;
            h1: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            h2: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            h3: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            h4: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            h5: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            h6: {};
            body1: {
                lineHeight: number;
                fontSize: string;
            };
            body2: {
                lineHeight: number;
            };
            subtitle1: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            subtitle2: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            button: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            caption: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
            overline: {
                fontWeight: string;
                fontSize: string;
                lineHeight: number;
            };
        };
        overrides: {
            MuiTypography: {
                subtitle1: {
                    color: string;
                };
                subtitle2: {
                    color: string;
                };
                button: {
                    color: string;
                };
                body1: {
                    color: string;
                };
                body2: {
                    color: string;
                };
                caption: {
                    color: string;
                };
            };
        };
    };
    export default Typography;
}
declare module "components/Alert" {
    const Alert: {
        overrides: {
            MuiAlert: {
                root: {
                    borderRadius: number;
                    padding: string;
                    alignItems: string;
                };
                message: {
                    padding: string;
                    fontSize: string;
                };
                icon: {
                    padding: number;
                    fontSize: string;
                };
                action: {
                    marginRight: number;
                };
                standardInfo: {
                    borderLeft: string;
                    '& $message > *:first-child': {
                        color: string;
                    };
                };
                standardSuccess: {
                    borderLeft: string;
                    '& $message > *:first-child': {
                        color: string;
                    };
                };
                standardWarning: {
                    borderLeft: string;
                    '& $message > *:first-child': {
                        color: string;
                    };
                };
                standardError: {
                    borderLeft: string;
                    '& $message > *:first-child': {
                        color: string;
                    };
                };
                filledInfo: {
                    borderLeft: string;
                    backgroundColor: string;
                    '& $message': {
                        color: string;
                    };
                    '& $icon, & $message > *:first-child': {
                        color: string;
                    };
                };
                filledSuccess: {
                    borderLeft: string;
                    backgroundColor: string;
                    '& $message': {
                        color: string;
                    };
                    '& $icon, & $message > *:first-child': {
                        color: string;
                    };
                };
                filledWarning: {
                    borderLeft: string;
                    backgroundColor: string;
                    '& $message': {
                        color: string;
                    };
                    '& $icon, & $message > *:first-child': {
                        color: string;
                    };
                };
                filledError: {
                    borderLeft: string;
                    backgroundColor: string;
                    '& $message': {
                        color: string;
                    };
                    '& $icon, & $message > *:first-child': {
                        color: string;
                    };
                };
            };
        };
    };
    export default Alert;
}
declare module "components/AlertTitle" {
    const AlertTitle: {
        overrides: {
            MuiAlertTitle: {
                root: {
                    fontSize: string;
                    marginBottom: number;
                };
            };
        };
    };
    export default AlertTitle;
}
declare module "components/Badge" {
    const Badge: {
        overrides: {
            MuiBadge: {
                badge: {
                    borderRadius: string;
                };
                colorPrimary: {
                    color: string;
                };
                colorSecondary: {
                    color: string;
                };
                colorError: {
                    color: string;
                };
            };
        };
    };
    export default Badge;
}
declare module "components/Button" {
    const Button: {
        props: {
            MuiButton: {
                color: string;
                variant: string;
                disableElevation: boolean;
            };
        };
        overrides: {
            MuiButton: {
                root: {
                    fontSize: string;
                    padding: string;
                    minWidth: string;
                    '&$contained': {
                        borderWidth: string;
                        borderStyle: string;
                        borderColor: string;
                    };
                };
                containedPrimary: {
                    color: string;
                    borderColor: string;
                    '&:disabled': {
                        background: string;
                        opacity: number;
                        color: string;
                        borderColor: string;
                    };
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                containedSecondary: {
                    color: string;
                    borderColor: string;
                    '&:disabled': {
                        background: string;
                        opacity: number;
                        color: string;
                        borderColor: string;
                    };
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                sizeSmall: {
                    fontSize: string;
                    padding: string;
                    minWidth: number;
                };
            };
        };
    };
    export default Button;
}
declare module "components/ButtonGroup" {
    const Button: {
        props: {
            MuiButtonGroup: {
                color: string;
                variant: string;
                disableElevation: boolean;
                size: string;
            };
        };
        overrides: {
            MuiButtonGroup: {
                root: {
                    '& $groupedContained': {
                        fontSize: string;
                        padding: string;
                    };
                };
                groupedContained: {
                    backgroundColor: string;
                };
                groupedContainedHorizontal: {
                    '&:not(:last-child)': {
                        borderWidth: number;
                        marginRight: string;
                    };
                };
                groupedContainedVertical: {
                    '&:not(:last-child)': {
                        borderWidth: number;
                        borderBottom: string;
                        marginBottom: string;
                    };
                };
                groupedContainedPrimary: {
                    color: string;
                    '&:hover': {
                        backgroundColor: string;
                        color: string;
                    };
                };
                groupedContainedSecondary: {
                    color: string;
                    '&:hover': {
                        backgroundColor: string;
                        color: string;
                    };
                };
            };
        };
    };
    export default Button;
}
declare module "components/CircularProgress" {
    const Badge: {
        props: {
            MuiCircularProgress: {
                thickness: number;
                size: string;
            };
        };
        BkCircularProgress: {
            props: {
                layered: boolean;
            };
        };
    };
    export default Badge;
}
declare module "components/Checkbox" {
    const Checkbox: {
        props: {
            MuiCheckbox: {
                color: string;
            };
        };
        overrides: {
            MuiCheckbox: {
                root: {
                    '&$disabled div, &$disabled div': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
                colorSecondary: {
                    '&$checked div': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
            };
        };
    };
    export default Checkbox;
}
declare module "components/Radio" {
    const Radio: {
        props: {
            MuiRadio: {
                color: string;
            };
        };
        overrides: {
            MuiRadio: {
                root: {
                    width: string;
                    height: string;
                    color: string;
                    padding: string;
                    '& div': {
                        borderWidth: string;
                        borderStyle: string;
                        borderRadius: string;
                        borderColor: string;
                        transition: string;
                    };
                    '&$checked div': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                    '&$disabled div': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                    '& svg:first-of-type': {
                        width: string;
                        height: string;
                        color: string;
                    };
                    '& svg:last-of-type': {
                        width: string;
                        height: string;
                        color: string;
                    };
                };
                colorPrimary: {
                    '&$checked:not($disabled) div': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
                colorSecondary: {
                    '&$checked:not($disabled) div': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
            };
        };
    };
    export default Radio;
}
declare module "components/TextField" {
    const TextField: {
        props: {
            MuiTextField: {
                variant: string;
                fullWidth: boolean;
            };
        };
        overrides: {
            MuiTextField: {
                root: {
                    '& label': {
                        transform: string;
                    };
                };
            };
        };
    };
    export default TextField;
}
declare module "components/FormHelperText" {
    const FormHelperText: {
        overrides: {
            MuiFormHelperText: {
                root: {
                    fontSize: string;
                    fontWeight: string;
                    '&$disabled': {
                        color: string;
                        opacity: number;
                    };
                };
                contained: {
                    marginTop: string;
                    marginLeft: string;
                };
            };
        };
    };
    export default FormHelperText;
}
declare module "components/FormControlLabel" {
    const FormControlLabel: {
        overrides: {
            MuiFormControlLabel: {
                root: {
                    marginLeft: string;
                    marginTop: string;
                };
                label: {
                    fontSize: string;
                    fontWeight: string;
                    color: string;
                };
            };
        };
    };
    export default FormControlLabel;
}
declare module "components/InputLabel" {
    const InputLabel: {
        props: {
            MuiInputLabel: {
                shrink: boolean;
            };
        };
        overrides: {
            MuiInputLabel: {
                root: {
                    '&$outlined$shrink': {
                        color: string;
                        position: string;
                        transform: string;
                        padding: string;
                        fontSize: string;
                        textTransform: string;
                    };
                    '&$outlined$shrink$error': {
                        color: string;
                    };
                };
            };
        };
    };
    export default InputLabel;
}
declare module "components/OutlinedInput" {
    const OutlinedInput: {
        overrides: {
            MuiOutlinedInput: {
                root: {
                    transition: string;
                    '& fieldset': {
                        transition: string;
                        borderWidth: string;
                    };
                    '&$disabled': {
                        opacity: number;
                        backgroundColor: string;
                        color: string;
                    };
                    '&$disabled $notchedOutline': {
                        borderColor: string;
                    };
                };
                input: {
                    padding: string;
                    '& ~ fieldset': {
                        top: number;
                    };
                    '& ~ fieldset legend': {
                        display: string;
                    };
                };
            };
        };
    };
    export default OutlinedInput;
}
declare module "components/Select" {
    const Select: {
        props: {
            MuiSelect: {
                MenuProps: {};
            };
        };
        overrides: {
            MuiSelect: {
                root: {
                    '&$select': {
                        transition: string;
                    };
                    '&$select:focus': {
                        background: string;
                        color: string;
                        borderRadius: string;
                    };
                    '&:focus ~ svg': {
                        color: string;
                    };
                    '&$select option': {
                        color: string;
                        padding: string;
                    };
                    '& label': {
                        transform: string;
                    };
                };
                iconOpen: {
                    color: string;
                };
            };
        };
        BkTextField: {
            menu: {
                padding: string;
                backgroundColor: string;
                border: string;
                '& ul': {
                    padding: number;
                };
            };
            menuItem: {
                padding: string;
                transition: string;
            };
            activeMenuItem: {
                backgroundColor: string;
                color: string;
            };
        };
    };
    export default Select;
}
declare module "components/Switch" {
    const Checkbox: {
        props: {
            MuiSwitch: {
                color: string;
            };
        };
        overrides: {
            MuiSwitch: {
                root: {
                    margin: string;
                    padding: string;
                    width: string;
                    height: string;
                    overflow: string;
                };
                switchBase: {
                    position: string;
                    top: string;
                    transform: string;
                    padding: number;
                    overflow: string;
                    '&:not($disabled) $thumb': {
                        backgroundColor: string;
                    };
                    '&$checked': {
                        transform: string;
                    };
                    '&$checked + $track': {
                        opacity: number;
                    };
                };
                track: {
                    opacity: number;
                    width: string;
                    height: string;
                    borderRadius: string;
                    backgroundColor: string;
                    transition: string;
                };
                thumb: {
                    width: string;
                    height: string;
                    borderRadius: string;
                    overflow: string;
                    transition: string;
                };
                colorPrimary: {
                    '&$checked:not($disabled) $thumb': {
                        backgroundColor: string;
                    };
                };
                colorSecondary: {
                    '&$checked:not($disabled) $thumb': {
                        backgroundColor: string;
                    };
                };
            };
        };
    };
    export default Checkbox;
}
declare module "components/Tabs" {
    const Tabs: {
        props: {
            MuiTabs: {
                indicatorColor: string;
                textColor: string;
            };
        };
        overrides: {
            MuiTabs: {
                root: {
                    borderBottom: string;
                };
                indicator: {
                    height: string;
                };
            };
        };
    };
    export default Tabs;
}
declare module "components/Tab" {
    const Tab: {
        overrides: {
            MuiTab: {
                root: {
                    padding: string;
                    fontSize: string;
                    lineHeight: number;
                    fontWeight: string;
                    '@media (min-width: 600px)': {
                        minWidth: number;
                    };
                };
                textColorPrimary: {
                    color: string;
                };
                textColorSecondary: {
                    color: string;
                };
                wrapper: {
                    flexDirection: string;
                };
                labelIcon: {
                    minHeight: number;
                    paddingTop: string;
                    '& $wrapper > *:first-child': {
                        marginBottom: number;
                        marginRight: string;
                    };
                };
                wrapped: {
                    fontSize: string;
                    lineHeight: number;
                };
            };
        };
    };
    export default Tab;
}
declare module "components/Tooltip" {
    const Tooltip: {
        props: {
            MuiTooltip: {
                arrow: boolean;
            };
        };
        overrides: {
            MuiTooltip: {
                tooltip: {
                    padding: string;
                    fontSize: string;
                    backgroundColor: string;
                    color: string;
                    minWidth: string;
                    maxWidth: string;
                    borderRadius: string;
                    boxShadow: string;
                };
                arrow: {
                    color: string;
                };
            };
        };
    };
    export default Tooltip;
}
declare module "index" {
    const Cerveza: import("@material-ui/core/styles").Theme;
    export default Cerveza;
}
