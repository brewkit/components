import { PaletteType, Theme } from '@material-ui/core';
import { color, size } from '../../variables';

export default function inputLabelOverrides(type: PaletteType) {
    return {
        root: {
            '&$outlined$shrink': {
                color: color.blueGray.dark,
                position: 'relative',
                transform: 'translate(0, 0) scale(1)',
                padding: `0 0 ${size.xsmall}`,
                fontSize: size.small,
                textTransform: 'uppercase',
            },

            '&$outlined$shrink$error': {
                color: color.accent.error,
            },
        },
    };
}
