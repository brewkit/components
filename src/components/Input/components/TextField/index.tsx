/* eslint-disable max-lines-per-function */
import React from 'react';
import clsx from 'clsx';
import MuiTextField from '@material-ui/core/TextField';
import ErrorOutline from '@material-ui/icons/ErrorOutlineOutlined';
import Visibility from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import Grow from '@material-ui/core/Grow';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * TextFields toggle the state of a single setting on or off.
 */
export const TextField = React.forwardRef(({
    label,
    className,
    hasError,
    isDisabled,
    isMultiline,
    isRequired,
    isFluid,
    shouldAutoFocus,
    isReadOnly,
    helperText,
    type = 'text',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const [isVisible, setVisible] = React.useState(type !== 'password');


    /**
     * figure our what type to our input is based on password visibility toggle
     */
    function getType(): string {
        if (type !== 'password') return type;
        return isVisible ? 'text' : 'password';
    }


    /**
     * Figure out which starting adornment to use based on input type
     */
    function getStartAdornment(): React.ReactNode {
        if (type === 'search') return (
            <span className="brew-TextField__searchIcon">
                <Search />
            </span>
        );
        return null;
    }


    /**
     * Figure out which end adornment to use based on input type and error state
     */
    function getEndAdornment(): React.ReactNode {
        if (type === 'password') return (
            <span className="brew-TextField__visibilityIcon" onClick={(): void => setVisible(!isVisible)}>
                {isVisible ? <Visibility /> : <VisibilityOff />}
            </span>
        );
        return (
            <Grow in={hasError}>
                <span className="brew-TextField__errorIcon">
                    <ErrorOutline />
                </span>
            </Grow>
        );
    }


    const classNames = clsx(
        'brew-TextField',
        className,
    );


    const InputProps = {
        classes: {
            root: 'brew-TextField__input',
            focused: 'brew-TextField__input--isFocused',
            error: 'brew-TextField__input--hasError',
        },
        startAdornment: getStartAdornment(),
        endAdornment: getEndAdornment(),
        readOnly: isReadOnly,
    };


    const InputLabelProps = {
        shrink: true,
        classes: {
            root: 'brew-TextField__label',
        },
    };


    const FormHelperTextProps = {
        classes: {
            root: 'brew-TextField__helperText',
            error: 'brew-TextField__helperText--hasError',
        },
    };


    return (
        <MuiTextField
            autoFocus={shouldAutoFocus}
            className={classNames}
            disabled={isDisabled}
            error={hasError}
            FormHelperTextProps={FormHelperTextProps}
            fullWidth={isFluid}
            helperText={helperText && (
                <Grow in={Boolean(helperText)}>
                    <span>{helperText}</span>
                </Grow>
            )}
            InputLabelProps={InputLabelProps}
            inputProps={{ ref }}
            InputProps={InputProps}
            label={label && <Typography>{label}</Typography>}
            multiline={isMultiline}
            required={isRequired}
            type={getType()}
            {...otherProps}
        />
    );


});


TextField.displayName = 'TextField';


export default TextField;
