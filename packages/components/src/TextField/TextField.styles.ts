import { Theme } from '@material-ui/core/styles/createTheme';
import { makeStyles } from '@material-ui/core/styles';
import merge from 'lodash.merge';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    BkTextField: {
      searchIcon: React.CSSProperties;
      visibilityIcon: React.CSSProperties;
      menu: React.CSSProperties;
      menuItem: React.CSSProperties;
      activeMenuItem: React.CSSProperties;
    };
  }

  interface ThemeOptions {
    BkTextField?: {
      searchIcon?: React.CSSProperties;
      visibilityIcon?: React.CSSProperties;
      menu?: React.CSSProperties;
      menuItem?: React.CSSProperties;
      activeMenuItem?: React.CSSProperties;
    };
  }
}

const useStyles = makeStyles<Theme>(
  (theme): any => ({
    searchIcon: merge(
      {
        display: 'flex',
        marginRight: '0.5rem',
        color: theme?.palette?.primary?.main,
      },
      theme?.BkTextField?.searchIcon
    ),

    visibilityIcon: merge(
      {
        display: 'flex',
        marginLeft: '0.5rem',
        color: theme?.palette?.primary?.main,
        cursor: 'pointer',
      },
      theme?.BkTextField?.visibilityIcon
    ),

    menu: merge({}, theme?.BkTextField?.menu),

    menuItem: merge({}, theme?.BkTextField?.menuItem),

    activeMenuItem: merge({}, theme?.BkTextField?.activeMenuItem),
  }),
  { name: 'TextField' }
);

export default useStyles;
