declare const FormControlLabel: {
    overrides: {
        MuiFormControlLabel: {
            label: {
                color: string;
                '&$disabled': {
                    color: string;
                };
            };
        };
    };
};
export default FormControlLabel;
