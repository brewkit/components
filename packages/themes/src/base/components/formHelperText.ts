import { Theme } from '@material-ui/core';
import { size, color } from '../../variables';

const formHelperText: Partial<Theme> = {
  overrides: {
    MuiFormHelperText: {
      root: {
        fontSize: size.small,
        fontWeight: 'normal',

        '&$disabled': {
          color: color.blueGray.main,
          opacity: 1,
        },
      },

      contained: {
        marginTop: size.xxsmall,
        marginLeft: '0 !important',
      },
    },
  },
};

export default formHelperText;
