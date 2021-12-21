import { PaletteType, Theme } from '@material-ui/core';
import cervezaPalette from '../../palette';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkCheckbox: {
            controlBase: React.CSSProperties;
            uncheckedControl: React.CSSProperties;
            checkedControl: React.CSSProperties;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkCheckbox?: {
            controlBase?: React.CSSProperties;
            uncheckedControl?: React.CSSProperties;
            checkedControl?: React.CSSProperties;
        };
    }
}

export default function checkboxOverrides(type: PaletteType) {
    return {
        root: {
            '&$disabled div, &$disabled div': {
                backgroundColor: cervezaPalette.primary,
                borderColor: cervezaPalette.primary,
            },
        },

        colorSecondary: {
            '&$checked div': {
                backgroundColor: cervezaPalette.secondary,
                borderColor: cervezaPalette.secondary,
            },
        },
    };
}

export const checkboxProps = {
    color: 'primary',
};
