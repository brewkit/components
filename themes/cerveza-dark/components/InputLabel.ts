import { color } from '../../cerveza/variables';


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
                    color: color.gray.main,
                },

            },

        },

    },


};


export default InputLabel;
