import { size, color } from '../variables';
var FormControlLabel = {
    overrides: {
        MuiFormControlLabel: {
            root: {
                marginLeft: "-" + size.xsmall,
                marginTop: "-" + size.xsmall
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
