import { PaletteType } from '@material-ui/core';
import { size } from '../../variables';

export default function alertTitleOverrites(type: PaletteType) {
    return {
        root: {
            fontSize: size.normal,
            marginBottom: 0,
        },
    };
}
