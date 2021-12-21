import { Theme } from '@material-ui/core';
import { size } from '../../variables';

const circularProgress: Partial<Theme> = {
    props: {
        MuiCircularProgress: {
            thickness: 3,
            size: size.xxlarge,
        },
    },

    BkCircularProgress: {
        props: {
            layered: true,
        },
    },
};

export default circularProgress;
