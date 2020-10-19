declare const Checkbox: {
    props: {
        MuiSwitch: {
            color: string;
        };
    };
    overrides: {
        MuiSwitch: {
            root: {
                margin: string;
                padding: string;
                width: string;
                height: string;
                overflow: string;
            };
            switchBase: {
                position: string;
                top: string;
                transform: string;
                padding: number;
                overflow: string;
                '&:not($disabled) $thumb': {
                    backgroundColor: string;
                };
                '&$checked': {
                    transform: string;
                };
                '&$checked + $track': {
                    opacity: number;
                };
            };
            track: {
                opacity: number;
                width: string;
                height: string;
                borderRadius: string;
                backgroundColor: string;
                transition: string;
            };
            thumb: {
                width: string;
                height: string;
                borderRadius: string;
                overflow: string;
                transition: string;
            };
            colorPrimary: {
                '&$checked:not($disabled) $thumb': {
                    backgroundColor: string;
                };
            };
            colorSecondary: {
                '&$checked:not($disabled) $thumb': {
                    backgroundColor: string;
                };
            };
        };
    };
};
export default Checkbox;
