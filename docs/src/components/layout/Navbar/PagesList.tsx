import React from 'react';
import { RouteMapEntry } from 'docs/utils/routes';
import { Typography } from '@brewkit/components';
import { Box, Link as MUILink } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PagesList = ({ routes }: { routes: RouteMapEntry[] }) => (
    <React.Fragment>
        {routes.map(({ path, name }, i) => {
            if (!path) {
                return (
                    <Box pt={2} key={path + name + i} whiteSpace="nowrap">
                        <Typography variant="h6">{name}</Typography>
                    </Box>
                );
            }

            return (
                <Box lineHeight={4} key={path + name + i}>
                    <Typography variant="body1">
                        <MUILink component={Link} to={path}>
                            {name}
                        </MUILink>
                    </Typography>
                </Box>
            );
        })}
    </React.Fragment>
);

export default PagesList;
