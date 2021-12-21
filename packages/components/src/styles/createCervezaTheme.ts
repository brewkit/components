import { createTheme, PaletteType, Theme } from '@material-ui/core';
import defaultTheme from './defaultTheme'

export interface GapSizes {
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
        gaps: GapSizes;
    }

    interface ThemeOptions {
        gaps: GapSizes;
    }
}

export default function createCervezaTheme(type: PaletteType): Theme {
    const c = (darkColor: string, lightColor: string) =>
        type === 'dark' ? darkColor : lightColor;

    const theme = createTheme({
        gaps: {
            xxsmall: '0.25rem',
            xsmall: '0.5rem',
            small: '0.75rem',
            normal: '1rem',
            large: '1.25rem',
            xlarge: '1.5rem',
            xxlarge: '2rem',
        },
        palette: {
                    palette: {
            type,
            primary: { main: cervezaPalette.primary },
            success: { main: cervezaPalette.states.success },
            error: { main: cervezaPalette.states.error },
            warning: { main: cervezaPalette.states.warning },
            info: { main: cervezaPalette.states.info },
            background: {
                default: c(
                    cervezaPalette.background.default.dark,
                    cervezaPalette.background.default.light,
                ),
                paper: c(
                    cervezaPalette.background.paper.dark,
                    cervezaPalette.background.paper.light,
                ),
            },
            text: {
                primary: c(
                    cervezaPalette.text.primary.dark,
                    cervezaPalette.text.primary.light,
                ),
                secondary: c(
                    cervezaPalette.text.secondary.dark,
                    cervezaPalette.text.secondary.light,
                ),
            },
        }
    });

    return theme;
}
