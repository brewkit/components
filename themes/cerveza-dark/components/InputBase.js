import { color } from '../../cerveza/variables';
var InputBase = {
    overrides: {
        MuiInputBase: {
            '&$disabled': {
                color: color.gray.lightest
            }
        }
    }
};
export default InputBase;
