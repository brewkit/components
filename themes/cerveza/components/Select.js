import { color, size } from '../variables';
var Select = {
    props: {
        MuiSelect: {
            MenuProps: {}
        }
    },
    overrides: {
        MuiSelect: {
            root: {
                '&$select': {
                    transition: 'all 0.3s'
                },
                '&$select:focus': {
                    background: color.brand.primary,
                    color: '#fff',
                    borderRadius: '4px'
                },
                '&:focus ~ svg': {
                    color: '#fff'
                },
                '&$select option': {
                    color: color.gray.dark,
                    padding: size.small
                },
                '& label': {
                    transform: 'translate(18px, 18px) scale(1)'
                }
            },
            iconOpen: {
                color: '#fff'
            }
        }
    },
    BkTextField: {
        menu: {
            padding: size.xsmall,
            backgroundColor: '#fff',
            border: "1px solid ".concat(color.brand.primary),
            '& ul': {
                padding: 0
            }
        },
        menuItem: {
            padding: size.small,
            transition: 'all 0.3s'
        },
        activeMenuItem: {
            backgroundColor: "".concat(color.brand.primary, " !important"),
            color: '#fff'
        }
    }
};
export default Select;
