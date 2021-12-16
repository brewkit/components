import { Theme } from '@material-ui/core/styles/createTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>(
  (theme: Theme) => ({
    primary: { color: theme.palette.primary.main },
    secondary: { color: theme.palette.secondary.main },
    success: { color: theme.palette.success.main },
    error: { color: theme.palette.error.main },
    warning: { color: theme.palette.warning.main },
    text: { color: theme.palette.text.primary },
  }),
  { name: 'Typography' }
);

export default useStyles;
