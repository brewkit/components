import { ReactNode } from 'react';
export interface Props {
    as?: 'input' | 'select' | 'textarea';
    checked?: boolean;
    children?: ReactNode;
    className?: string;
    cols?: number;
    customControl?: ReactNode;
    defaultChecked?: boolean;
    defaultValue?: any;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    inputClassName?: string;
    inputLabel?: string;
    inputLabelClassName?: string;
    name?: string;
    onChange?: any;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    value?: any;
    after?: ReactNode;
    before?: ReactNode;
}
