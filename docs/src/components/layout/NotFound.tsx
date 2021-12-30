import { Typography } from '@brewkit/components';
import { Box } from '@material-ui/core';
import React from 'react';

const NotFound = () => (
    <Box textAlign="center">
        <Typography variant="h2" color="error">
            404
        </Typography>
        <Typography variant="body1">Page you requested is not found</Typography>
    </Box>
);

export default NotFound;
