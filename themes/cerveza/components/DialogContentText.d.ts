declare const DialogContentText: {
    overrides: {
        MuiDialogContentText: {
            root: {
                color: string;
                textAlign: string;
                marginBottom: string;
                '&:last-child': {
                    marginBottom: number;
                };
            };
        };
    };
};
export default DialogContentText;
