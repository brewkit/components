import {
    ButtonGroupClassKey,
    ButtonGroupProps,
    PaletteType,
    Theme,
} from '@material-ui/core';
import cervezaPalette from '../../palette';
import { size } from '../../variables';

export default function buttonGroupOverrides(type: PaletteType) {
    return {
        groupedContained: {
            fontSize: size.small,
            padding: `${size.small} ${size.xsmall}`,
            backgroundColor:
                type === 'dark'
                    ? cervezaPalette.background.paper.dark
                    : cervezaPalette.background.paper.light,
        },
    };
}

export const buttonGroupProps: ButtonGroupProps = {
    color: 'primary',
    variant: 'contained',
    disableElevation: true,
    size: 'small',
};
