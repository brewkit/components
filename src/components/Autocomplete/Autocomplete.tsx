import * as React from 'react';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';
// import { motion, AnimatePresence } from 'framer-motion';
import TextField from '@material-ui/core/TextField';
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
function AutocompleteInner<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
>(
    {
        InputProps,
        // label,
        renderInput,
        type,
        ...otherProps
    }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    ref: React.ForwardedRef<any>,
): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {
    const classes = useStyles();

    const icon =
        type === 'search' ? (
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
        ) : null;

    const renderFunction =
        renderInput ||
        ((params: any): React.ReactNode => (
            <TextField
                {...params}
                InputProps={{
                    ...InputProps,
                    startAdornment: icon,
                }}
                // label={label}
                type={type}
                variant="outlined"
            />
        ));

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
}

export const Autocomplete = React.forwardRef(AutocompleteInner);

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
