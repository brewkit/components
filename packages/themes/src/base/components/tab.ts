import { Theme } from '@material-ui/core';
import { color, size } from '../../variables';

const tab: Partial<Theme> = {
  overrides: {
    MuiTab: {
      root: {
        padding: '1rem 1rem 0.875rem 1rem',
        fontSize: size.small,
        lineHeight: 1,
        fontWeight: 'bold',

        '@media (min-width: 600px)': {
          minWidth: 0,
        },
      },

      textColorPrimary: {
        color: color.blueGray.dark,
      },

      textColorSecondary: {
        color: color.blueGray.dark,
      },

      wrapper: {
        flexDirection: 'row',
      },

      labelIcon: {
        minHeight: 0,
        paddingTop: size.normal,
        '& $wrapper > *:first-child': {
          marginBottom: 0,
          marginRight: size.xsmall,
        },
      },

      wrapped: {
        fontSize: size.small,
        lineHeight: 1,
      },
    },
  },
};

export default tab;
