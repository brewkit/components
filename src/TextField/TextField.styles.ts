import { Theme } from '@material-ui/core/styles/createTheme';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

export const useMuiStyles = makeStyles(() =>
    createStyles({
        root: {
            '& label': {
                transform: 'translate(18px, 18px) scale(1)',
            },
        },
    }),
);

export default makeStyles(
    (theme) =>
        createStyles({
            searchIcon: merge(
                {
                    display: 'flex',
                    marginRight: '0.5rem',
                    color: theme?.palette?.primary?.main,
                },
                theme?.BkTextField?.searchIcon,
            ),

            visibilityIcon: merge(
                {
                    display: 'flex',
                    marginLeft: '0.5rem',
                    color: theme?.palette?.primary?.main,
                    cursor: 'pointer',
                },
                theme?.BkTextField?.visibilityIcon,
            ),

            menu: merge({}, theme?.BkTextField?.menu),

            menuItem: merge({}, theme?.BkTextField?.menuItem),

            activeMenuItem: merge({}, theme?.BkTextField?.activeMenuItem),
        }),
    { name: 'TextField' },
);
