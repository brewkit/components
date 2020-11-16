import { color } from '../variables';
var Dialog = {
    overrides: {
        MuiDialog: {
            paper: {
                alignItems: 'center',
                width: '500px',
                padding: '2rem 1rem',
                backgroundColor: 'transparent'
            },
            container: {
                backgroundColor: color.blueGray.darkest,
                opacity: 0.9
            }
        }
    }
};
export default Dialog;
