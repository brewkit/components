import React from 'react';
import { RouteMapEntry } from 'docs/utils/routes';
import { Typography } from '@brewkit/components';
import { Box, Link as MUILink } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PagesList = ({ routes }: { routes: RouteMapEntry[] }) => {
    return (
        <React.Fragment>
            {routes.map(({ base, path, name }) => {
                if (!path) {
                    return (
                        <Box pt={2} key={name} whiteSpace="nowrap">
                            <Typography variant="h6">{name}</Typography>
                        </Box>
                    );
                }

                return (
                    <Typography variant="body1" key={name}>
                        <MUILink component={Link} to={path}>
                            {name}
                        </MUILink>
                    </Typography>
                );
            })}
        </React.Fragment>
    );
};

export default PagesList;
