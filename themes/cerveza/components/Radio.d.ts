declare const Radio: {
    props: {
        MuiRadio: {
            color: string;
        };
    };
    overrides: {
        MuiRadio: {
            root: {
                width: string;
                height: string;
                color: string;
                padding: string;
                '& div': {
                    borderWidth: string;
                    borderStyle: string;
                    borderRadius: string;
                    borderColor: string;
                    transition: string;
                };
                '&$checked div': {
                    backgroundColor: string;
                    borderColor: string;
                };
                '&$disabled div': {
                    backgroundColor: string;
                    borderColor: string;
                };
                '& svg:first-of-type': {
                    width: string;
                    height: string;
                    color: string;
                };
                '& svg:last-of-type': {
                    width: string;
                    height: string;
                    color: string;
                };
            };
            colorPrimary: {
                '&$checked:not($disabled) div': {
                    backgroundColor: string;
                    borderColor: string;
                };
            };
            colorSecondary: {
                '&$checked:not($disabled) div': {
                    backgroundColor: string;
                    borderColor: string;
                };
            };
        };
    };
};
export default Radio;
