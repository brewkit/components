import { Props as InputBaseProps } from '../InputBase/types';

export type Props = Omit<InputBaseProps,
    'as'
    | 'after'
    | 'before'
    | 'children'
    | 'cols'
    | 'defaultValue'
    | 'error'
    | 'placeholder'
    | 'rows'
    | 'type'
    | 'value'
>;
