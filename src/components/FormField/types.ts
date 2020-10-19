import * as React from 'react';
import { Props as CheckboxProps } from '@components/Checkbox/types';
import { Props as SwitchProps } from '@components/Switch/types';
import { Props as RadioProps } from '@components/Radio/types';
import { Props as TextFieldProps } from '@components/TextField/types';


export type Props = CheckboxProps & SwitchProps & RadioProps & TextFieldProps & {

    /**
     * The type of input to render.
     * @default 'text'
     */
    type?: 'text' | 'password' | 'number' | 'checkbox' | 'radio' | 'switch',

    /**
     * The label of the input
     */
    label?: React.ReactNode,

    /**
     * The name of the input
     */
    name: string,

    /**
     * The validation object used to validate the input
     */
    validation?: Record<string, unknown>,

    /**
     * the value of the input
     */
    value?: any,

};
