import { size, color } from '../variables';
var FormControlLabel = {
    overrides: {
        MuiFormControlLabel: {
            root: {
                marginLeft: "-".concat(size.xsmall),
                marginTop: "-".concat(size.xsmall)
            },
            label: {
                fontSize: size.normal,
                fontWeight: 'normal',
                color: color.blueGray.dark
            }
        }
    }
};
export default FormControlLabel;
