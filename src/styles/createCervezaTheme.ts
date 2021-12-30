import { createTheme, PaletteType, Theme } from '@material-ui/core';
import defaultTheme from './defaultTheme';

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

export default function createCervezaTheme(type: PaletteType = 'light'): Theme {
    const c = (darkColor: string, lightColor: string) =>
        type === 'dark' ? darkColor : lightColor;

    const theme = createTheme({
        sizes: {
            xxsmall: '0.25rem',
            xsmall: '0.5rem',
            small: '0.75rem',
            normal: '1rem',
            large: '1.25rem',
            xlarge: '1.5rem',
            xxlarge: '2rem',
        },
        palette: {
            type,
            primary: { main: defaultTheme.primary },
            success: { main: defaultTheme.states.success },
            error: { main: defaultTheme.states.error },
            warning: { main: defaultTheme.states.warning },
            info: { main: defaultTheme.states.info },
            background: {
                default: c(
                    defaultTheme.background.default.dark,
                    defaultTheme.background.default.light,
                ),
                paper: c(
                    defaultTheme.background.paper.dark,
                    defaultTheme.background.paper.light,
                ),
            },
            text: {
                primary: c(
                    defaultTheme.text.primary.dark,
                    defaultTheme.text.primary.light,
                ),
                secondary: c(
                    defaultTheme.text.secondary.dark,
                    defaultTheme.text.secondary.light,
                ),
            },
        },
    });

    return theme;
}
