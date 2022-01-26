
import * as React from 'react';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';

// import { motion, AnimatePresence } from 'framer-motion';
import TextField from '../TextField';
import { AutocompleteProps } from './Autocomplete.types';
import useStyles from './styles';


/**
 * Autocomplete fields let users enter and edit text, and select items from a pop-up list.
 *
 * [Material-UI Docs](https://v4.mui.com/api/autocomplete/)
 *
 * ## Differences in Brewkit:
 *
 * - Adds a search icon when `type="search"`. Styles can be overridden using `BkAutocomplete.searchIcon`.
 */
const AutocompleteInner = <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
> (
        {
            InputProps,
            label,
            renderInput,
            type,
            ...otherProps
        }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
        ref: React.ForwardedRef<any>,
    ): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null => {

    const classes = useStyles();

    const renderFunction = renderInput
        ? renderInput
        : (params: any): React.ReactNode => (
            <TextField
                {...params}
                InputProps={{ ...InputProps }}
                label={label}
                type={type}
                variant="outlined"
            />
        );

    /**
     * generate select options from options prop. Will use MenuItem if desktop and native treatments if mobile.
     * keep this, or something like it?
     */


    return (
        <MuiAutocomplete
            classes={classes}
            ref={ref}
            {...otherProps}
            renderInput={renderFunction}
        />
    );
};


export const Autocomplete = React.forwardRef(AutocompleteInner);

Autocomplete.displayName = 'Autocomplete';


export default Autocomplete;

