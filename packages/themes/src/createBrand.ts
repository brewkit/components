import { createTheme, PaletteType, Theme } from '@material-ui/core';
import { getComponentDefaultProps, getComponentOverrides } from './base';
import cervezaPalette from './palette';
import { size } from './variables';

export default function createBrand(type: PaletteType): Theme {
    const c = (darkColor: string, lightColor: string) =>
        type === 'dark' ? darkColor : lightColor;

    const theme = createTheme({
        overrides: getComponentOverrides(type),
        props: getComponentDefaultProps(),
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
        },
        typography: {
            h1: { fontSize: size.xxlarge },
            h2: { fontSize: size.xlarge },
            h3: { fontSize: size.large },
            body1: { fontSize: size.normal },
            body2: { fontSize: size.small },
            caption: { fontSize: size.xsmall },
        },
    });

    return theme;
}
