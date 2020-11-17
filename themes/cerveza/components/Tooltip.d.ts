declare const Tooltip: {
    props: {
        MuiTooltip: {
            arrow: boolean;
        };
    };
    overrides: {
        MuiTooltip: {
            tooltip: {
                padding: string;
                fontSize: string;
                backgroundColor: string;
                color: string;
                minWidth: string;
                maxWidth: string;
                borderRadius: string;
                boxShadow: string;
            };
            arrow: {
                color: string;
            };
        };
    };
};
export default Tooltip;
