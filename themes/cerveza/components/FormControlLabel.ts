import { size, color } from '../variables';


const FormControlLabel = {


    overrides: {

        MuiFormControlLabel: {

            root: {
                marginLeft: `-${size.xsmall}`,
                marginTop: `-${size.xsmall}`,
            },

            label: {
                fontSize: size.normal,
                fontWeight: 'normal',
                color: color.blueGray.dark,
            },

        },

    },


};


export default FormControlLabel;
