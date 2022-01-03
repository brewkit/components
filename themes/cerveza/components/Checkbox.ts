import { color } from '../variables';


const Checkbox = {

    props: {

        MuiCheckbox: {
            color: 'primary',
        },

    },


    overrides: {

        MuiCheckbox: {

            root: {
                '&$disabled div, &$disabled div': {
                    backgroundColor: color.blueGray.light,
                    borderColor: color.blueGray.light,
                },
            },

            colorSecondary: {
                '&$checked div': {
                    backgroundColor: color.brand.secondary,
                    borderColor: color.brand.secondary,
                },
            },

            MuiIconButton: {
                label: {
                    '& div': {
                        borderWidth: '1px',
                    },
                },
            },

        },

    },


};


export default Checkbox;
