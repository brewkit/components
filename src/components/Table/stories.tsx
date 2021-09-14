import * as React from 'react';
import Table from '@components/Table';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableFooter from './components/TableFooter';
// import { GridColDef } from '@material-ui/data-grid';
import styles from './styles';


export default {
    component: Table,
    title: 'Data Display/Table',
};

export const Sandbox = (): React.ReactElement => {

    const classes = styles();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Column One
                    </TableCell>
                    <TableCell>
                        Column Two
                    </TableCell>
                    <TableCell>
                        Column Three
                    </TableCell>
                    <TableCell>
                        Column Four
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Hey
                    </TableCell>
                    <TableCell>
                        There
                    </TableCell>
                    <TableCell>
                        Testing
                    </TableCell>
                    <TableCell>
                        Table
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Hey
                    </TableCell>
                    <TableCell>
                        There
                    </TableCell>
                    <TableCell>
                        Testing
                    </TableCell>
                    <TableCell>
                        Table
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFooter hasPagination />
        </Table>
    );

};
