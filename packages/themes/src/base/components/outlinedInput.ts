import { Theme } from '@material-ui/core';
import { color } from '../../variables';

const outlinedInput: Partial<Theme> = {
  overrides: {
    MuiOutlinedInput: {
      root: {
        transition: 'all 0.3s',

        '& fieldset': {
          transition: 'all 0.3s',
          borderWidth: '1px !important',
        },

        '&$disabled': {
          opacity: 1,
          backgroundColor: color.blueGray.light,
          color: color.blueGray.darker,
        },

        '&$disabled $notchedOutline': {
          borderColor: color.blueGray.light,
        },
      },

      input: {
        padding: '1rem',

        '& ~ fieldset': {
          top: 0,
        },

        '& ~ fieldset legend': {
          display: 'none',
        },
      },
    },
  },
};

export default outlinedInput;
