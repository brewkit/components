declare const DialogActions: {
    overrides: {
        MuiDialogActions: {
            root: {
                display: string;
                padding: number;
                width: string;
            };
            spacing: {
                '& > :not(:last-child)': {
                    marginBottom: string;
                };
                '& > :not(:first-child)': {
                    marginLeft: number;
                };
            };
        };
    };
};
export default DialogActions;
