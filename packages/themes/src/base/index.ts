import { Theme } from '@material-ui/core';
import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';
import { merge } from 'lodash';
import { color } from '../variables';
import alert from './components/alert';
import alertTitle from './components/alertTitle';
import badge from './components/badge';
import button from './components/button';
import buttonGroup from './components/buttonGroup';
import checkbox from './components/checkbox';
import circularProgress from './components/circularProgress';
import formControlLabel from './components/formControlLabel';
import formHelperText from './components/formHelperText';
import inputLabel from './components/inputLabel';
import outlinedInput from './components/outlinedInput';
import radio from './components/radio';
import select from './components/select';
import _switch from './components/switch';
import tab from './components/tab';
import tabs from './components/tabs';
import textField from './components/textField';
import tooltip from './components/tooltip';
import typography from './components/typography';

const basePalette: { palette: Partial<Palette> } = {
  palette: {
    primary: {
      light: color.blue.light,
      main: color.brand.primary,
      dark: color.blue.dark,
      contrastText: color.common.white,
    },
    secondary: {
      light: color.orange.light,
      main: color.brand.secondary,
      dark: color.orange.dark,
      contrastText: color.common.white,
    },
    success: {
      light: color.accent.success,
      main: color.accent.success,
      dark: color.accent.success,
      contrastText: color.accent.success,
    },
    warning: {
      light: color.accent.warning,
      main: color.accent.warning,
      dark: color.accent.warning,
      contrastText: color.accent.warning,
    },
    info: {
      light: color.accent.info,
      main: color.accent.info,
      dark: color.accent.info,
      contrastText: color.accent.info,
    },
    error: {
      light: color.accent.error,
      main: color.accent.error,
      dark: color.accent.error,
      contrastText: color.accent.error,
    },
  },
};

const baseTheme: Theme = merge(
  basePalette,
  alert,
  alertTitle,
  badge,
  button,
  buttonGroup,
  checkbox,
  circularProgress,
  formControlLabel,
  formHelperText,
  inputLabel,
  outlinedInput,
  radio,
  select,
  _switch,
  tab,
  tabs,
  textField,
  tooltip,
  typography
);

export default baseTheme;
