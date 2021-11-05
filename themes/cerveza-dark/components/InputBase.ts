

import { color } from '../../cerveza/variables';


const InputBase = {


    overrides: {

        MuiInputBase: {

            disabled: {
                backgroundColor: color.gray.dark,
                color: color.gray.lightest,
            }

        },

    },


};


export default InputBase;
