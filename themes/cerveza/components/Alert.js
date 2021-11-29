import { color, size } from '../variables';
var Alert = {
    overrides: {
        MuiAlert: {
            root: {
                borderRadius: 0,
                padding: size.normal,
                alignItems: 'center'
            },
            message: {
                padding: size.xsmall,
                fontSize: size.small
            },
            icon: {
                padding: 0,
                fontSize: size.xxlarge
            },
            action: {
                marginRight: 0
            },
            standardInfo: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.info),
                '& $message > *:first-child': {
                    color: color.accent.info
                }
            },
            standardSuccess: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.success),
                '& $message > *:first-child': {
                    color: color.accent.success
                }
            },
            standardWarning: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.warning),
                '& $message > *:first-child': {
                    color: color.accent.warning
                }
            },
            standardError: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.error),
                '& $message > *:first-child': {
                    color: color.accent.error
                }
            },
            filledInfo: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.info),
                backgroundColor: color.blueGray.darker,
                '& $message': {
                    color: color.gray.lightest
                },
                '& $icon, & $message > *:first-child': {
                    color: color.accent.info
                }
            },
            filledSuccess: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.success),
                backgroundColor: color.blueGray.darker,
                '& $message': {
                    color: color.gray.lightest
                },
                '& $icon, & $message > *:first-child': {
                    color: color.accent.success
                }
            },
            filledWarning: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.warning),
                backgroundColor: color.blueGray.darker,
                '& $message': {
                    color: color.gray.lightest
                },
                '& $icon, & $message > *:first-child': {
                    color: color.accent.warning
                }
            },
            filledError: {
                borderLeft: "".concat(size.xsmall, " solid ").concat(color.accent.error),
                backgroundColor: color.blueGray.darker,
                '& $message': {
                    color: color.gray.lightest
                },
                '& $icon, & $message > *:first-child': {
                    color: color.accent.error
                }
            }
        }
    }
};
export default Alert;
