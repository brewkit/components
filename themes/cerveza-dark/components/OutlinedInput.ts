import {color, size} from '../../cerveza/variables';

const OutlinedInput = {

    overrides: {

        MuiOutlinedInput: {

            root: {

                '& input': {
                    color: color.gray.lightest,
                },

                '& $notchedOutline': {
                    borderColor: color.gray.main,
                },

                '&:hover $notchedOutline': {
                    borderColor: color.gray.lighter,
                },

                '&$disabled': {
                    backgroundColor: color.blueGray.dark,

                    '& input': {
                        color: color.blueGray.light,
                    },
                },

                '&$disabled $notchedOutline': {
                    borderColor: color.blueGray.dark,
                },

            },

        },

    },


};


export default OutlinedInput;
