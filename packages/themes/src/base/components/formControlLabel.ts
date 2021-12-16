import { Theme } from '@material-ui/core';
import { size, color } from '../../variables';

const formControlLabel: Partial<Theme> = {
  overrides: {
    MuiFormControlLabel: {
      root: {
        marginLeft: `-${size.xsmall}`,
        marginTop: `-${size.xsmall}`,
      },

      label: {
        fontSize: size.normal,
        fontWeight: 'normal',
        color: color.blueGray.dark,
      },
    },
  },
};

export default formControlLabel;
