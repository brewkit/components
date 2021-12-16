import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { PaletteType } from '@material-ui/core';
import useBrandTheme from './useBrandTheme';

interface ThemeCreatorProps {
    children: JSX.Element;
    type: PaletteType;
}

const ThemeCreator = ({ children, type = 'light' }: ThemeCreatorProps) => {
    const theme = useBrandTheme(type);
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeCreator;
