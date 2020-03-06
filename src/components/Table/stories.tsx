import React from 'react';
// import { select, text } from '@storybook/addon-knobs';
import Table from './index';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import Flag from '../Flag';
import Typography from '../Typography';


export default {
    component: Table,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/Table',
};


export const General = (): React.ReactElement => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell isSortable={true} sortDirection="asc">Device Name / OS</TableCell>
                <TableCell>Network ID / Channel</TableCell>
                <TableCell>Mac Address / Manufacturer</TableCell>
                <TableCell>TX</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                    <Typography variant="body1" color="inherit">Chromecast</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption">OvrC Cabin</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">28:36:38:57:1E:01</Typography>
                    <Typography variant="caption" display="block">Google, Inc.</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">984.2MB</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="body1" color="inherit" display="block">Adam-iPhone</Typography>
                    <Typography variant="caption" display="block">Apple iOS</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">OvrC Cabin</Typography>
                    <Typography variant="caption" display="block">5GHz</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">98:9E:63:24:F2:2B</Typography>
                    <Typography variant="caption" display="block">Apple, Inc.</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">2.6MB</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="body1" color="inherit" display="block">NP-12345X123432</Typography>
                    <Typography variant="caption" display="block">Roku OS 7.3.1</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">OvrC Cabin</Typography>
                    <Typography variant="caption" display="block">2.4GHz</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">AC:3A:7A:CC:DE:59</Typography>
                    <Typography variant="caption" display="block">Roku, Inc.</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">240.7MB</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="body1" display="block" color="inherit">raspberrypi</Typography>
                    <Typography variant="caption" display="block">Raspbian OS</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">OvrC Cabin Low</Typography>
                    <Typography variant="caption" display="block">5GHz</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">00:D0:2D:DA:35:F2</Typography>
                    <Typography variant="caption" display="block">Rasberry Pi Foundation</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">35.2MB</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant="body1" display="block" color="inherit">Unspecified</Typography>
                    <Typography variant="caption" display="block">Windows 10</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">OvrC Cabin</Typography>
                    <Typography variant="caption" display="block">2.4GHz</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">28:36:38:57:1E:19</Typography>
                    <Typography variant="caption" display="block">Intel Corporate</Typography>
                </TableCell>
                <TableCell>
                    <Typography variant="caption" display="block">3.2GB</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);