import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'after'
    | 'as'
    | 'before'
    | 'children'
    | 'cols'
    | 'defaultValue'
    | 'multiple'
    | 'placeholder'
    | 'type'
    | 'rows'
    >;
