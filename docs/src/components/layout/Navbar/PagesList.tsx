import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Typography } from '@brewkit/components';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { RouteMapEntry } from 'docs/utils/routes';
import { getTitle } from 'docs/utils/mdUtils';

const PagesList = ({ routes }: { routes: RouteMapEntry[] }) => {
    const [open, setOpen] = useState<string | null>(null);

    return (
        <List>
            {routes.map(({ children, inRootDir, path, name }) => {
                if (!children?.length || inRootDir) {
                    return;
                }

                return (
                    <div key={name + path}>
                        <ListItem
                            button
                            onClick={() =>
                                setOpen(name === open ? null : name)
                            }>
                            <ListItemText primary={name} />
                            {name === open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open === name}>
                            <List component="div">
                                {children?.map((route) => {
                                    // Get h1 tag from the markdown file, if not use resolved name
                                    const resolveName = route.isMarkdown
                                        ? getTitle(route.contents?.html)
                                            ? getTitle(route.contents?.html)
                                            : route.name
                                        : route.name;
                                    return (
                                        <ListItem
                                            component={Link}
                                            to={route.path}
                                            key={route.path + route.name}
                                            button>
                                            <ListItemText disableTypography>
                                                <Typography
                                                    color="primary"
                                                    variant="body2">
                                                    {resolveName}
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Collapse>
                    </div>
                );
            })}
        </List>
    );
};

export default PagesList;
