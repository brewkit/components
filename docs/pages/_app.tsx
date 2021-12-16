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
import { useBrandTheme, UserThemeContext } from '@docs/style';

const DocsRoot: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    const isDarkDefault = useMediaQuery('(prefers-color-scheme: dark)');
    const [themeType, setThemeType] = React.useState<PaletteType>(
        isDarkDefault ? 'dark' : 'light',
    );

    const onUpdate = () => {
        setThemeType(themeType === 'dark' ? 'light' : 'dark');
    };

    const theme = useBrandTheme(themeType);

    return (
        <ClientOnly>
            <CssBaseline />
            <UserThemeContext.Provider value={{ onUpdate, themeType }}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </UserThemeContext.Provider>
        </ClientOnly>
    );
};

export default DocsRoot;
