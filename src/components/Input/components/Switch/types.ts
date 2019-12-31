import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    | 'before'
    | 'children'
    | 'cols'
    | 'type'
    | 'as'
    | 'defaultValue'
    | 'placeholder'
    | 'rows'
    | 'value'
    >;
