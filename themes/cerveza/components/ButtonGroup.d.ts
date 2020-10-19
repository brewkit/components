declare const Button: {
    props: {
        MuiButtonGroup: {
            color: string;
            variant: string;
            disableElevation: boolean;
            size: string;
        };
    };
    overrides: {
        MuiButtonGroup: {
            root: {
                '& $groupedContained': {
                    fontSize: string;
                    padding: string;
                };
            };
            groupedContained: {
                backgroundColor: string;
            };
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderWidth: number;
                    marginRight: string;
                };
            };
            groupedContainedVertical: {
                '&:not(:last-child)': {
                    borderWidth: number;
                    borderBottom: string;
                    marginBottom: string;
                };
            };
            groupedContainedPrimary: {
                color: string;
                '&:hover': {
                    backgroundColor: string;
                    color: string;
                };
            };
            groupedContainedSecondary: {
                color: string;
                '&:hover': {
                    backgroundColor: string;
                    color: string;
                };
            };
        };
    };
};
export default Button;
