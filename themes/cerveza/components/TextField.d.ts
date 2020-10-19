declare const TextField: {
    props: {
        MuiTextField: {
            variant: string;
            fullWidth: boolean;
        };
    };
    overrides: {
        MuiTextField: {
            root: {
                '& label': {
                    transform: string;
                };
            };
        };
    };
};
export default TextField;
