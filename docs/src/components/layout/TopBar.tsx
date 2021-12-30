import {
    Box,
    useTheme,
    useMediaQuery,
    PaletteType,
    IconButton,
} from '@material-ui/core';
import React from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

interface TopBarProps {
    onThemeUpdate: (type: PaletteType) => void;
}

const TopBar = ({ onThemeUpdate }: TopBarProps) => {
    const {
        palette: { type },
    } = useTheme();

    return (
        <Box
            p={4}
            display="flex"
            alignItems="center"
            height="60px"
            justifyContent="flex-right">
            <IconButton
                aria-label="Toggle dark mode"
                color="primary"
                onClick={() =>
                    onThemeUpdate(type === 'dark' ? 'light' : 'dark')
                }>
                {type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
        </Box>
    );
};

export default TopBar;
