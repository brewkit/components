import React from 'react';
import { RouteMapEntry } from 'docs/utils/routes';
import { Box, PaletteType, useTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import SetupRoutes from './SetupRoutes';
import Navbar from './Navbar';
import TopBar from './TopBar';

interface LayoutProps {
    routes: RouteMapEntry[];
    onThemeUpdate: (type: PaletteType) => void;
}

const Layout = ({ routes, onThemeUpdate }: LayoutProps) => {
    return (
        <Box width="100vw" overflow="hidden">
            <BrowserRouter>
                <TopBar onThemeUpdate={onThemeUpdate} />
                <Box display="flex">
                    <Navbar routes={routes} />
                    <Box width="100%" height="100vh">
                        <Paper elevation={0} square>
                            <Box p={6} height="100vh" overflow="auto">
                                <SetupRoutes routes={routes} />
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </BrowserRouter>
        </Box>
    );
};

export default Layout;
