import { color, size } from '../variables';
var Tabs = {
    props: {
        MuiTabs: {
            indicatorColor: 'primary',
            textColor: 'primary'
        }
    },
    overrides: {
        MuiTabs: {
            root: {
                borderBottom: '2px solid ' + color.brand.tertiary
            },
            indicator: {
                height: size.xxsmall
            }
        }
    }
};
export default Tabs;
