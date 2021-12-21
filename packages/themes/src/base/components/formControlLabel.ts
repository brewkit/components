import { PaletteType, Theme } from '@material-ui/core';
import { size, color } from '../../variables';

export default function formControlLabelOverrides(type: PaletteType) {
    return {
        root: {
            marginLeft: `-${size.xsmall}`,
            marginTop: `-${size.xsmall}`,
        },

        label: {
            fontSize: size.normal,
            fontWeight: 'normal',
            color: color.blueGray.dark,
        },
    };
}
