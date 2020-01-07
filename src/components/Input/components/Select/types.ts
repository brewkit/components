import { Props as InputBaseProps } from '../InputBase/types';

export type Props = Omit<InputBaseProps,
    'as'
    | 'after'
    | 'before'
    | 'checked'
    | 'cols'
    | 'defaultChecked'
    | 'inputLabel'
    | 'inputLabelClassName'
    | 'rows'
    | 'type'
>;