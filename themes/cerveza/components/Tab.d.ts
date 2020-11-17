declare const Tab: {
    overrides: {
        MuiTab: {
            root: {
                padding: string;
                fontSize: string;
                lineHeight: number;
                fontWeight: string;
                '@media (min-width: 600px)': {
                    minWidth: number;
                };
            };
            textColorPrimary: {
                color: string;
            };
            textColorSecondary: {
                color: string;
            };
            wrapper: {
                flexDirection: string;
            };
            labelIcon: {
                minHeight: number;
                paddingTop: string;
                '& $wrapper > *:first-child': {
                    marginBottom: number;
                    marginRight: string;
                };
            };
            wrapped: {
                fontSize: string;
                lineHeight: number;
            };
        };
    };
};
export default Tab;
