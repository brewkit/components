import { PaletteType } from '@material-ui/core';
import { size, color } from '../../variables';

export default function formHelperTextOverrides(type: PaletteType) {
    return {
        root: {
            fontSize: size.small,

            '&$disabled': {
                color: color.blueGray.main,
                opacity: 1,
            },
        },

        contained: {
            marginTop: size.xxsmall,
            marginLeft: '0 !important',
        },
    };
}
