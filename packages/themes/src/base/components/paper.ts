import { PaletteType } from '@material-ui/core';
import cervezaPalette from '../../palette';

export default function paperOverrides(type: PaletteType) {
    return {
        root: {
            backgroundColor:
                type === 'dark'
                    ? cervezaPalette.background.paper.dark
                    : cervezaPalette.background.paper.light,
            color:
                type === 'dark'
                    ? cervezaPalette.text.primary.dark
                    : cervezaPalette.text.primary.light,
        },
    };
}
