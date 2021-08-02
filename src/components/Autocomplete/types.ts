import { AutocompleteProps, AutocompleteGetTagProps } from '@material-ui/lab';
import React from 'react';
import { Props as TextFieldProps } from '../TextField/types';
import { Props as CheckboxProps } from '../Checkbox/types';

export interface Props<T> extends AutocompleteProps<T, any, any, any> {
    CheckboxProps?: CheckboxProps,
    virtualize?: boolean,
    tagTextResolve?: (option: any, tagProps: AutocompleteGetTagProps) => void,
    TextFieldProps?: TextFieldProps | undefined,
}
