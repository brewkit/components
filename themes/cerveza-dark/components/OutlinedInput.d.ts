declare const OutlinedInput: {
    overrides: {
        MuiOutlinedInput: {
            root: {
                '& input': {
                    color: string;
                };
                '& $notchedOutline': {
                    borderColor: string;
                };
                '&:hover $notchedOutline': {
                    borderColor: string;
                };
            };
        };
    };
};
export default OutlinedInput;
