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
        };
    };
};
export default Checkbox;
