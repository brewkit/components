import { Theme } from '@material-ui/core';
import { color } from '../../variables';

const checkbox: Partial<Theme> = {
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
  },

  overrides: {
    MuiCheckbox: {
      root: {
        '&$disabled div, &$disabled div': {
          backgroundColor: color.blueGray.light,
          borderColor: color.blueGray.light,
        },
      },

      colorSecondary: {
        '&$checked div': {
          backgroundColor: color.brand.secondary,
          borderColor: color.brand.secondary,
        },
      },
    },
  },
};

export default checkbox;
