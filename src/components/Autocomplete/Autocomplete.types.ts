import * as React from 'react';
import { AutocompleteProps as MuiAutocompleteProps } from '@material-ui/lab/Autocomplete';
import { TextFieldProps } from '../TextField';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkAutocomplete: {
            searchIcon: React.CSSProperties,
            menu: React.CSSProperties,
            menuItem: React.CSSProperties,
            activeMenuItem: React.CSSProperties,
        },
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkAutocomplete: {
            searchIcon?: React.CSSProperties,
            menu?: React.CSSProperties,
            menuItem?: React.CSSProperties,
            activeMenuItem?: React.CSSProperties,
        },
    }
}


export type AutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> = Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'>
    & Partial<Pick<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'>>
    & Pick<TextFieldProps, 'InputProps' | 'label' | 'type'>;
