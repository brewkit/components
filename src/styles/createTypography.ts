import { PaletteType } from '@material-ui/core';
import { Typography } from '@material-ui/core/styles/createTypography';
import { Sizes } from './createCervezaTheme';

export const fontWeight = {
    light: 300,
    normal: 400,
    regular: 400,
    medium: 500,
    bold: 700,
};

export default function createTypography(
    type: PaletteType,
    sizes: Sizes,
): Partial<Typography> {
    return {
        h1: {
            fontWeight: fontWeight.bold,
            fontSize: sizes.xxlarge,
            lineHeight: `calc(${sizes.normal} * 3)`,
        },
        h2: {
            fontWeight: fontWeight.bold,
            fontSize: sizes.xlarge,
            lineHeight: sizes.xxlarge,
        },
        h3: {
            fontWeight: fontWeight.bold,
            fontSize: sizes.large,
            lineHeight: sizes.xlarge,
        },
        body1: {
            fontSize: sizes.normal,
            fontWeight: fontWeight.normal,
            lineHeight: 1.25,
        },
    };
}
