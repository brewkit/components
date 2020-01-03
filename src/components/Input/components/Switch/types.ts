import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'after'
    | 'before'
    | 'children'
    | 'cols'
    | 'type'
    | 'as'
    | 'defaultValue'
    | 'placeholder'
    | 'rows'
    >;
