import { color, size } from '../variables';
var InputLabel = {
    props: {
        MuiInputLabel: {
            shrink: true
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                '&$outlined$shrink': {
                    color: color.gray.main,
                    position: 'relative',
                    transform: 'translate(0, 0) scale(1)',
                    padding: "0 0 " + size.xsmall,
                    fontSize: size.small,
                    textTransform: 'uppercase'
                },
                '&$outlined$shrink$error': {
                    color: color.accent.error
                }
            }
        }
    }
};
export default InputLabel;
