declare const DialogContent: {
    overrides: {
        MuiDialogContent: {
            root: {
                padding: number;
                '&:not(:last-child)': {
                    marginBottom: string;
                };
            };
        };
    };
};
export default DialogContent;
