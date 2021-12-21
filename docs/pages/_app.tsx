import React from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import ClientOnly from '@docs/components/ClientOnly';
import {
    useMediaQuery,
    PaletteType,
    ThemeProvider,
    CssBaseline,
} from '@material-ui/core';
import { useGlobalCss, UserThemeContext } from '@docs/style';
import { createBrand } from '@brewkit/themes';

const DocsRoot: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    const isDarkDefault = useMediaQuery('(prefers-color-scheme: dark)');
    const [themeType, setThemeType] = React.useState<PaletteType>(
        isDarkDefault ? 'light' : 'dark',
    );

    const onUpdate = () => {
        setThemeType(themeType === 'dark' ? 'light' : 'dark');
    };

    const theme = createBrand(themeType);

    useGlobalCss();

    return (
        <ClientOnly>
            <CssBaseline />
            <UserThemeContext.Provider value={{ onUpdate }}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </UserThemeContext.Provider>
        </ClientOnly>
    );
};

export default DocsRoot;
