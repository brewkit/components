import { color, size } from '../variables';

const Tabs = {

    props : {

        MuiTabs: {
            indicatorColor: 'primary',
            textColor: 'primary',
        },
    },

    overrides: {

        MuiTabs: {

            root: {
                borderBottom: '2px solid ' + color.brand.tertiary,
            },

            indicator: {
                height: size.xxsmall,
            },
        },

    },

};

export default Tabs;
