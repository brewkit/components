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
                '&$disabled': {
                    backgroundColor: string;
                    '& input': {
                        color: string;
                    };
                };
                '&$disabled $notchedOutline': {
                    borderColor: string;
                };
            };
        };
    };
};
export default OutlinedInput;
