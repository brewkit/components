import { color, size } from '../../variables';
import { Theme } from '@material-ui/core';
import Color from 'color';

const button: Partial<Theme> = {
    props: {
        MuiButton: {
            color: 'primary',
            variant: 'contained',
            disableElevation: true,
        },
    },

    overrides: {
        MuiButton: {
            root: {
                fontSize: size.normal,
                padding: `${size.normal} ${size.large}`,
                minWidth: '150px',

                '&$contained': {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                },
            },

            containedPrimary: {
                backgroundColor: color.brand.primary,

                '&:disabled': {
                    background: 'transparent',
                    opacity: 0.5,
                    color: color.brand.primary,
                    borderColor: color.brand.primary,
                },

                '&:hover': {
                    backgroundColor: Color(color.brand.primary)
                        .darken(0.1)
                        .hex(),
                },
            },

            containedSecondary: {
                color: color.gray.lightest,
                borderColor: color.brand.secondary,

                '&:disabled': {
                    background: 'transparent',
                    opacity: 0.5,
                    color: color.brand.secondary,
                    borderColor: color.brand.secondary,
                },
                '&:hover': {
                    backgroundColor: Color(color.brand.secondary)
                        .darken(1)
                        .hex(),
                },
            },

            sizeSmall: {
                fontSize: size.small,
                padding: `${size.xsmall} ${size.small}`,
                minWidth: 0,
            },
        },
    },
};

export default button;
