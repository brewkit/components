import { color } from '../../cerveza/variables';
var OutlinedInput = {
    overrides: {
        MuiOutlinedInput: {
            root: {
                '& input': {
                    color: color.gray.lightest
                },
                '& $notchedOutline': {
                    borderColor: color.gray.main
                },
                '&:hover $notchedOutline': {
                    borderColor: color.gray.lighter
                }
            }
        }
    }
};
export default OutlinedInput;
