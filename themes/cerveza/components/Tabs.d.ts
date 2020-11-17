declare const Tabs: {
    props: {
        MuiTabs: {
            indicatorColor: string;
            textColor: string;
        };
    };
    overrides: {
        MuiTabs: {
            root: {
                borderBottom: string;
            };
            indicator: {
                height: string;
            };
        };
    };
};
export default Tabs;
