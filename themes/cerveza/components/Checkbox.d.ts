declare const Checkbox: {
    props: {
        MuiCheckbox: {
            color: string;
        };
    };
    overrides: {
        MuiCheckbox: {
            root: {
                '&$disabled div, &$disabled div': {
                    backgroundColor: string;
                    borderColor: string;
                };
            };
            colorSecondary: {
                '&$checked div': {
                    backgroundColor: string;
                    borderColor: string;
                };
            };
            MuiIconButton: {
                label: {
                    '& div': {
                        borderWidth: string;
                    };
                };
            };
        };
    };
};
export default Checkbox;
