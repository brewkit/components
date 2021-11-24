

import { color } from '../../cerveza/variables';


const InputBase = {


    overrides: {

        MuiInputBase: {

            disabled: {
                opacity: 1,
                backgroundColor: color.blueGray.light,
                color: color.blueGray.darker,
            },

        },

    },


};


export default InputBase;
