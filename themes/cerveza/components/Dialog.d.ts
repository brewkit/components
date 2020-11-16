declare const Dialog: {
    overrides: {
        MuiDialog: {
            paper: {
                alignItems: string;
                width: string;
                padding: string;
                backgroundColor: string;
            };
            container: {
                backgroundColor: string;
                opacity: number;
            };
        };
    };
};
export default Dialog;
