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
                };
            };
        };
    };
};
export default InputLabel;
