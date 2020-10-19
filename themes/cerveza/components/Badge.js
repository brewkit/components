import { color } from '../variables';
var Badge = {
    overrides: {
        MuiBadge: {
            badge: {
                borderRadius: '4px'
            },
            colorPrimary: {
                color: color.gray.lightest
            },
            colorSecondary: {
                color: color.gray.lightest
            },
            colorError: {
                color: color.gray.lightest
            }
        }
    }
};
export default Badge;
