import { color } from '../../cerveza/variables';
var FormControlLabel = {
    overrides: {
        MuiFormControlLabel: {
            label: {
                color: color.gray.main,
                '&$disabled': {
                    color: color.gray.main
                }
            }
        }
    }
};
export default FormControlLabel;
