declare const Button: {
    props: {
        MuiButton: {
            color: string;
            variant: string;
            disableElevation: boolean;
        };
    };
    overrides: {
        MuiButton: {
            root: {
                fontSize: string;
                padding: string;
                minWidth: string;
                lineHeight: number;
                '&$contained': {
                    borderWidth: string;
                    borderStyle: string;
                    borderColor: string;
                };
            };
            containedPrimary: {
                color: string;
                borderColor: string;
                '&:disabled': {
                    background: string;
                    opacity: number;
                    color: string;
                    borderColor: string;
                };
            };
            containedSecondary: {
                color: string;
                borderColor: string;
                '&:disabled': {
                    background: string;
                    opacity: number;
                    color: string;
                    borderColor: string;
                };
            };
        };
    };
};
export default Button;
