import React from 'react';
import SetupRoutes from './SetupRoutes';
import { RouteMapEntry } from 'docs/utils/routes';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';

const Layout = ({ routes }: { routes: RouteMapEntry[] }) => {
    return (
        <Box width="100vw" height="100vh" display="flex">
            <BrowserRouter>
                <Navbar routes={routes} />
                <Box width="100%" height="100vh">
                    <Paper elevation={0}>
                        <Box p={6} height="100vh">
                            <SetupRoutes routes={routes} />
                        </Box>
                    </Paper>
                </Box>
            </BrowserRouter>
        </Box>
    );
};

export default Layout;
