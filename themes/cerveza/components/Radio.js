import { color, size } from '../variables';
var Radio = {
    props: {
        MuiRadio: {
            color: 'primary'
        }
    },
    overrides: {
        MuiRadio: {
            root: {
                width: '2rem',
                height: '2rem',
                color: color.blueGray.light,
                padding: size.small,
                '& div': {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderRadius: '50%',
                    borderColor: 'inherit',
                    transition: 'all 0.3s'
                },
                '&$checked div': {
                    backgroundColor: color.brand.primary,
                    borderColor: color.brand.primary
                },
                '&$disabled div': {
                    backgroundColor: color.blueGray.light,
                    borderColor: color.blueGray.light
                },
                '& svg:first-of-type': {
                    width: '2rem',
                    height: '2rem',
                    color: 'transparent'
                },
                '& svg:last-of-type': {
                    width: '2rem',
                    height: '2rem',
                    color: '#fff'
                }
            },
            colorPrimary: {
                '&$checked:not($disabled) div': {
                    backgroundColor: color.brand.primary,
                    borderColor: color.brand.primary
                }
            },
            colorSecondary: {
                '&$checked:not($disabled) div': {
                    backgroundColor: color.brand.secondary,
                    borderColor: color.brand.secondary
                }
            }
        }
    }
};
export default Radio;
