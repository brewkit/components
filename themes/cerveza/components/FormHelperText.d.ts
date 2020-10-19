declare const FormHelperText: {
    overrides: {
        MuiFormHelperText: {
            root: {
                fontSize: string;
                fontWeight: string;
                '&$disabled': {
                    color: string;
                    opacity: number;
                };
            };
            contained: {
                marginTop: string;
                marginLeft: string;
            };
        };
    };
};
export default FormHelperText;
