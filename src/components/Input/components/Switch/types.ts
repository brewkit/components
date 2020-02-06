import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'after'
    | 'as'
    | 'before'
    | 'cols'
    | 'defaultValue'
    | 'multiple'
    | 'placeholder'
    | 'type'
    | 'rows'
    >;
