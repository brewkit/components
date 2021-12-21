import { PaletteType, Theme } from '@material-ui/core';
import { TextFieldProps } from 'material-ui';

export const textFieldProps = {
    fullWidth: true,
};

export default function textFieldOverrides(type: PaletteType) {
    return {
        root: {
            '& label': {
                transform: 'translate(18px, 18px) scale(1)',
            },
        },
    };
}
