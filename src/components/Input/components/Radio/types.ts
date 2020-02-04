import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'as'
    | 'after'
    | 'before'
    | 'cols'
    | 'defaultValue'
    | 'error'
    | 'placeholder'
    | 'rows'
    | 'type'
    | 'fullWidth'
>;
