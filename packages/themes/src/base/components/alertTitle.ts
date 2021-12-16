import { Theme } from '@material-ui/core';
import { size } from '../../variables';

const alertTitle: Partial<Theme> = {
    overrides: {
        MuiAlertTitle: {
            root: {
                fontSize: size.normal,
                marginBottom: 0,
            },
        },
    },
};

export default alertTitle;
