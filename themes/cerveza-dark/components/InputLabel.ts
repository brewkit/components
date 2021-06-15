import {color, size} from '../../cerveza/variables';


const InputLabel = {


    props: {

        MuiInputLabel: {
            shrink: true,
        },

    },


    overrides: {

        MuiInputLabel: {

            root: {

                '&$outlined$shrink': {
                    color: color.gray.light,
                },

            },

        },

    },


};


export default InputLabel;
