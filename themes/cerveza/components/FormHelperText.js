import { size, color } from '../variables';
var FormHelperText = {
    overrides: {
        MuiFormHelperText: {
            root: {
                fontSize: size.small,
                fontWeight: 'normal',
                '&$disabled': {
                    color: color.blueGray.main,
                    opacity: 1
                }
            },
            contained: {
                marginTop: size.xxsmall,
                marginLeft: '0 !important'
            }
        }
    }
};
export default FormHelperText;
