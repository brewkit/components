var DialogActions = {
    overrides: {
        MuiDialogActions: {
            root: {
                display: 'block',
                padding: 0,
                width: '100%'
            },
            spacing: {
                '& > :not(:last-child)': {
                    marginBottom: '1rem'
                },
                '& > :not(:first-child)': {
                    marginLeft: 0
                }
            }
        }
    }
};
export default DialogActions;
