import { Theme } from '@material-ui/core';
import { color } from '../../variables';

const badge: Partial<Theme> = {
  overrides: {
    MuiBadge: {
      badge: {
        borderRadius: '4px',
      },

      colorPrimary: {
        color: color.gray.lightest,
      },

      colorSecondary: {
        color: color.gray.lightest,
      },

      colorError: {
        color: color.gray.lightest,
      },
    },
  },
};

export default badge;
