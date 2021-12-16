import { Theme } from '@material-ui/core';

const textField: Partial<Theme> = {
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
  },

  overrides: {
    MuiTextField: {
      root: {
        '& label': {
          transform: 'translate(18px, 18px) scale(1)',
        },
      },
    },
  },
};

export default textField;
