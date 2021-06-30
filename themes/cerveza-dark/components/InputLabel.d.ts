declare const InputLabel: {
    props: {
        MuiInputLabel: {
            shrink: boolean;
        };
    };
    overrides: {
        MuiInputLabel: {
            root: {
                '&$outlined$shrink': {
                    color: string;
                    position: string;
                    transform: string;
                    padding: string;
                    fontSize: string;
                    textTransform: string;
                };
                '&$outlined$shrink$error': {
                    color: string;
                };
            };
        };
    };
};
export default InputLabel;
