import { color } from '../../cerveza/variables';


const FormControlLabel = {


    overrides: {

        MuiFormControlLabel: {

            label: {

                color: color.gray.main,

                '&$disabled': {

                    color: color.gray.main,

                },

            },

        },

    },


};


export default FormControlLabel;
