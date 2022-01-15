import { createTheme, PaletteType, Theme } from '@material-ui/core';
import { sizes, defaultTheme, DefaultTheme } from '../themes/defaultTheme';
import componentOverrides from '../themes/overrides';
import createTypography from './createTypography';

export interface Sizes {
    xlarge: string;
    large: string;
    normal: string;
    small: string;
    xsmall: string;
    xxsmall: string;
    xxlarge: string;
}

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        sizes: Sizes;
    }

    interface ThemeOptions {
        sizes: Sizes;
    }
}

export default function createCervezaTheme<T>(
    type: PaletteType = 'light',
    args: T = {} as T,
    theme: DefaultTheme = defaultTheme,
): Theme {
    const c = (darkColor: string, lightColor: string) =>
        type === 'dark' ? darkColor : lightColor;

    return createTheme(
        {
            sizes,
            typography: createTypography(type, sizes),
            overrides: componentOverrides(type, theme),
            palette: {
                type,
                primary: { main: theme.primary },
                success: { main: theme.states.success },
                error: { main: theme.states.error },
                warning: { main: theme.states.warning },
                info: { main: theme.states.info },
                background: {
                    default: c(
                        theme.background.default.dark,
                        theme.background.default.light,
                    ),
                    paper: c(
                        theme.background.paper.dark,
                        theme.background.paper.light,
                    ),
                },
                text: {
                    primary: c(
                        theme.text.primary.dark,
                        theme.text.primary.light,
                    ),
                    secondary: c(
                        theme.text.secondary.dark,
                        theme.text.secondary.light,
                    ),
                },
            },
        },
        [args],
    );
}
