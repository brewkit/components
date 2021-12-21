import { PaletteType, Theme } from '@material-ui/core';
import { TabsProps } from 'material-ui';
import { color, size } from '../../variables';

export default function tabsOverrides(type: PaletteType) {
    return {
        root: {
            borderBottom: '2px solid ' + color.brand.tertiary,
        },

        indicator: {
            height: size.xxsmall,
        },
    };
}

export const tabsProps: TabsProps = {};
