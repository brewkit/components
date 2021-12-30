import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, PaletteType, useMediaQuery } from '@material-ui/core';
import { createCervezaTheme } from '@brewkit/components';
import { createRoutesMap } from 'docs/utils/routes';
import Layout from './Layout';

const routes = createRoutesMap();

const Main = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [themeType, setThemeType] = useState<PaletteType>(
        prefersDarkMode ? 'light' : 'dark',
    );

    const updateTheme = (type: PaletteType) => setThemeType(type);

    const theme = useMemo(() => createCervezaTheme(themeType), [themeType]);

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Layout onThemeUpdate={updateTheme} routes={routes} />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Main;
