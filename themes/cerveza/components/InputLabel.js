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
                    color: color.blueGray.dark,
                    position: 'relative',
                    transform: 'translate(0, 0) scale(1)',
                    padding: "0 0 ".concat(size.xsmall),
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
