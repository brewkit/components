import {
    useTheme,
    PaletteType,
    IconButton,
    AppBar,
    makeStyles,
    createStyles,
    Box,
} from '@material-ui/core';
import React from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Github from '@material-ui/icons/Github';
import { GITHUB_PAGE } from 'docs/utils/constants';

interface TopBarProps {
    onThemeUpdate: (type: PaletteType) => void;
}

const useStyles = makeStyles(({ palette }) =>
    createStyles({
        appBarRoot: {
            backgroundColor: palette.background.default,
        },
        iconButton: {
            fontSize: '10px',
            width: '50px',
        },
    }),
);

const TopBar = ({ onThemeUpdate }: TopBarProps) => {
    const {
        palette: { type },
    } = useTheme();
    const classes = useStyles();

    return (
        <AppBar classes={{ root: classes.appBarRoot }} position="sticky">
            <Box p={1} display="flex" justifyContent="flex-end">
                <IconButton
                    size="medium"
                    classes={{ root: classes.iconButton }}
                    aria-label="Toggle dark mode"
                    color="default"
                    onClick={() =>
                        onThemeUpdate(type === 'dark' ? 'light' : 'dark')
                    }>
                    {type === 'light' ? (
                        <Brightness4Icon />
                    ) : (
                        <Brightness7Icon />
                    )}
                </IconButton>
                <IconButton
                    size="medium"
                    classes={{ root: classes.iconButton }}
                    aria-label="Github page"
                    color="default"
                    onClick={() => (window.location.href = GITHUB_PAGE)}>
                    <Github />
                </IconButton>
            </Box>
        </AppBar>
    );
};

export default TopBar;
