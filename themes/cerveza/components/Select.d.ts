declare const Select: {
    props: {
        MuiSelect: {
            MenuProps: {};
        };
    };
    overrides: {
        MuiSelect: {
            root: {
                '&$select': {
                    transition: string;
                };
                '&$select:focus': {
                    background: string;
                    color: string;
                    borderRadius: string;
                };
                '&:focus ~ svg': {
                    color: string;
                };
                '& label': {
                    transform: string;
                };
            };
            iconOpen: {
                color: string;
            };
        };
    };
    BkTextField: {
        menu: {
            padding: string;
            backgroundColor: string;
            border: string;
            '& ul': {
                padding: number;
            };
        };
        menuItem: {
            padding: string;
            transition: string;
        };
        activeMenuItem: {
            backgroundColor: string;
            color: string;
        };
    };
};
export default Select;
