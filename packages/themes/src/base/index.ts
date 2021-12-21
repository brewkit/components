import { PaletteType } from '@material-ui/core';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { Overrides } from '@material-ui/core/styles/overrides';

import buttonOverrides, { buttonProps } from './components/button';
import buttonGroupOverrides, {
    buttonGroupProps,
} from './components/buttonGroup';
import badgeOverrides from './components/badge';
import inputLabelOverrides from './components/inputLabel';
import checkboxOverrides, { checkboxProps } from './components/checkbox';
import formControlLabelOverrides from './components/formControlLabel';
import formHelperTextOverrides from './components/formHelperText';
import outlinedInputOverrides from './components/outlinedInput';
import paperOverrides from './components/paper';
import radioOverrides from './components/radio';
import selectOverrides from './components/select';
import switchOverrides from './components/switch';
import tabOverrides from './components/tab';
import tabsOverrides, { tabsProps } from './components/tabs';
import textFieldOverrides, { textFieldProps } from './components/textField';
import tooltipOverrides, { tooltipProps } from './components/tooltip';

/**
 * Material UI class overrides
 */
export function getComponentOverrides(type: PaletteType): Overrides {
    return {
        MuiButton: buttonOverrides(type),
        MuiButtonGroup: buttonGroupOverrides(type),
        MuiBadge: badgeOverrides(type),
        MuiCheckbox: checkboxOverrides(type),
        MuiFormControl: formControlLabelOverrides(type),
        MuiFormHelperText: formHelperTextOverrides(type),
        MuiInputLabel: inputLabelOverrides(type),
        MuiOutlinedInput: outlinedInputOverrides(type),
        MuiPaper: paperOverrides(type),
        MuiRadio: radioOverrides(type),
        MuiSelect: selectOverrides(type),
        MuiSwitch: switchOverrides(type),
        MuiTab: tabOverrides(type),
        MuiTabs: tabsOverrides(type),
        MuiTextField: textFieldOverrides(type),
        MuiTooltip: tooltipOverrides(type),
    };
}

/**
 * Material UI overrite default props
 */
export function getComponentDefaultProps(): ComponentsProps {
    return {
        MuiButton: buttonProps,
        MuiButtonGroup: buttonGroupProps,
        MuiCheckbox: checkboxProps,
        MuiTabs: tabsProps,
        MuiTooltip: tooltipProps,
        MuiTextField: textFieldProps,
    };
}
