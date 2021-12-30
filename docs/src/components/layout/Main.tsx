import React from 'react';
import Layout from './Layout';
import { createRoutesMap } from 'docs/utils/routes';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { createCervezaTheme } from '@brewkit/components';

const Main = () => {
    const theme = createCervezaTheme();
    const routes = createRoutesMap();

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Layout routes={routes} />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Main;
