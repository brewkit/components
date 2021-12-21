import { PaletteType, Theme } from '@material-ui/core';
import { color } from '../../variables';

export default function badgeOverrides(type: PaletteType) {
    return {
        badge: {
            borderRadius: '4px',
        },

        colorPrimary: {
            color: color.gray.lightest,
        },

        colorSecondary: {
            color: color.gray.lightest,
        },

        colorError: {
            color: color.gray.lightest,
        },
    };
}
