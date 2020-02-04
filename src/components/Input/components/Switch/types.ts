import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'after'
    | 'before'
    | 'cols'
    | 'type'
    | 'as'
    | 'defaultValue'
    | 'placeholder'
    | 'rows'
    >;
