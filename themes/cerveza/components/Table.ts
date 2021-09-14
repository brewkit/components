import { color, size } from '../variables';


const Table = {


    props: {

        MuiTable: {},

    },


    overrides: {

        MuiTable: {

            root: {},

        },

        MuiTableHead: {

            root: {
                backgroundColor: color.gray.light,
                color: color.gray.dark,
                padding: size.small,
            },

        },

        MuiTableCell: {

            root: {
                padding: size.small,
            },

        },

    },


};


export default Table;
