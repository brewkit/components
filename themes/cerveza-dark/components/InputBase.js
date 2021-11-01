import { color } from '../../cerveza/variables';
var InputBase = {
    overrides: {
        MuiInputBase: {
            disabled: {
                backgroundColor: color.gray.dark,
                color: color.gray.lightest
            }
        }
    }
};
export default InputBase;
