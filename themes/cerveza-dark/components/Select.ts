

import { color } from '../../cerveza/variables';


const Select = {

    overrides: {

        MuiSelect: {

            select: {
                color: color.gray.lightest,
            },

            icon: {
                color: color.gray.lightest,
            },

        },

    },

    BkTextField: {

        menu: {
            backgroundColor: color.blueGray.darkest,
        },

        menuItem: {
            color: color.gray.lightest
        },
    },


};


export default Select;
