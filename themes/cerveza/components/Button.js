import { color, size } from '../variables';
var Button = {
    props: {
        MuiButton: {
            color: 'primary',
            variant: 'contained',
            disableElevation: true
        }
    },
    overrides: {
        MuiButton: {
            root: {
                fontSize: size.normal,
                padding: size.normal + " " + size.large,
                minWidth: '150px',
                lineHeight: 0,
                '&$contained': {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'transparent'
                }
            },
            containedPrimary: {
                color: color.gray.lightest,
                borderColor: color.brand.primary,
                '&:disabled': {
                    background: 'transparent',
                    opacity: 0.5,
                    color: color.brand.primary,
                    borderColor: color.brand.primary
                }
            },
            containedSecondary: {
                color: color.gray.lightest,
                borderColor: color.brand.secondary,
                '&:disabled': {
                    background: 'transparent',
                    opacity: 0.5,
                    color: color.brand.secondary,
                    borderColor: color.brand.secondary
                }
            }
        }
    }
};
export default Button;
