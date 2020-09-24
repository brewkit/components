import { size } from '../variables';


const TextField = {


    props: {

        MuiTextField: {
            variant: 'outlined',
            fullWidth: true,
        },

    },


    overrides: {

        MuiOutlinedInput: {

            root: {
                '& fieldset': {
                    transition: 'all 0.3s',
                    borderWidth: '1px !important',
                },
            },

        },

        MuiFormHelperText: {
            root: {
                fontSize: size.small,
                fontWeight: 'normal',
            },
        },

    },


};


export default TextField;
