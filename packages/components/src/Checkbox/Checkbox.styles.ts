import { Theme } from '@material-ui/core/styles/createTheme';
import blueGrey from '@material-ui/core/colors/blueGrey';
import merge from 'lodash.merge';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    BkCheckbox: {
      controlBase: React.CSSProperties;
      uncheckedControl: React.CSSProperties;
      checkedControl: React.CSSProperties;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    BkCheckbox?: {
      controlBase?: React.CSSProperties;
      uncheckedControl?: React.CSSProperties;
      checkedControl?: React.CSSProperties;
    };
  }
}

const styles = (theme: Theme): any => ({
  controlBase: merge(
    {
      height: '2rem',
      width: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '4px',
      transition: 'all 0.3s',
    },
    theme?.BkCheckbox?.controlBase
  ),

  uncheckedControl: merge(
    {
      borderColor: blueGrey[100],
    },
    theme?.BkCheckbox?.uncheckedControl
  ),

  checkedControl: merge(
    {
      color: '#fff',
      backgroundColor: theme?.palette?.primary?.main,
      borderColor: theme?.palette?.primary?.main,
    },
    theme?.BkCheckbox?.checkedControl
  ),
});

export default styles;
