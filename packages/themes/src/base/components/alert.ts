import { Theme } from '@material-ui/core';
import { color, size } from '../../variables';

const alert: Partial<Theme> = {
  overrides: {
    MuiAlert: {
      root: {
        borderRadius: 0,
        padding: size.normal,
        alignItems: 'center',
      },

      message: {
        padding: size.xsmall,
        fontSize: size.small,
      },

      icon: {
        padding: 0,
        fontSize: size.xxlarge,
      },

      action: {
        marginRight: 0,
      },

      /**
       * variant=standard styles
       */
      standardInfo: {
        borderLeft: `${size.xsmall} solid ${color.accent.info}`,
        '& $message > *:first-child': {
          color: color.accent.info,
        },
      },

      standardSuccess: {
        borderLeft: `${size.xsmall} solid ${color.accent.success}`,
        '& $message > *:first-child': {
          color: color.accent.success,
        },
      },

      standardWarning: {
        borderLeft: `${size.xsmall} solid ${color.accent.warning}`,
        '& $message > *:first-child': {
          color: color.accent.warning,
        },
      },

      standardError: {
        borderLeft: `${size.xsmall} solid ${color.accent.error}`,
        '& $message > *:first-child': {
          color: color.accent.error,
        },
      },

      /**
       * variant=filled styles
       */
      filledInfo: {
        borderLeft: `${size.xsmall} solid ${color.accent.info}`,
        backgroundColor: color.blueGray.darker,
        '& $message': {
          color: color.gray.lightest,
        },
        '& $icon, & $message > *:first-child': {
          color: color.accent.info,
        },
      },

      filledSuccess: {
        borderLeft: `${size.xsmall} solid ${color.accent.success}`,
        backgroundColor: color.blueGray.darker,
        '& $message': {
          color: color.gray.lightest,
        },
        '& $icon, & $message > *:first-child': {
          color: color.accent.success,
        },
      },

      filledWarning: {
        borderLeft: `${size.xsmall} solid ${color.accent.warning}`,
        backgroundColor: color.blueGray.darker,
        '& $message': {
          color: color.gray.lightest,
        },
        '& $icon, & $message > *:first-child': {
          color: color.accent.warning,
        },
      },

      filledError: {
        borderLeft: `${size.xsmall} solid ${color.accent.error}`,
        backgroundColor: color.blueGray.darker,
        '& $message': {
          color: color.gray.lightest,
        },
        '& $icon, & $message > *:first-child': {
          color: color.accent.error,
        },
      },
    },
  },
};

export default alert;
