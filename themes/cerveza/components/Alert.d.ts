declare const Alert: {
    overrides: {
        MuiAlert: {
            root: {
                borderRadius: number;
                padding: string;
                alignItems: string;
            };
            message: {
                padding: string;
                fontSize: string;
            };
            icon: {
                padding: number;
                fontSize: string;
            };
            action: {
                marginRight: number;
            };
            standardInfo: {
                borderLeft: string;
                '& $message > *:first-child': {
                    color: string;
                };
            };
            standardSuccess: {
                borderLeft: string;
                '& $message > *:first-child': {
                    color: string;
                };
            };
            standardWarning: {
                borderLeft: string;
                '& $message > *:first-child': {
                    color: string;
                };
            };
            standardError: {
                borderLeft: string;
                '& $message > *:first-child': {
                    color: string;
                };
            };
            filledInfo: {
                borderLeft: string;
                backgroundColor: string;
                '& $message': {
                    color: string;
                };
                '& $icon, & $message > *:first-child': {
                    color: string;
                };
            };
            filledSuccess: {
                borderLeft: string;
                backgroundColor: string;
                '& $message': {
                    color: string;
                };
                '& $icon, & $message > *:first-child': {
                    color: string;
                };
            };
            filledWarning: {
                borderLeft: string;
                backgroundColor: string;
                '& $message': {
                    color: string;
                };
                '& $icon, & $message > *:first-child': {
                    color: string;
                };
            };
            filledError: {
                borderLeft: string;
                backgroundColor: string;
                '& $message': {
                    color: string;
                };
                '& $icon, & $message > *:first-child': {
                    color: string;
                };
            };
        };
    };
};
export default Alert;
