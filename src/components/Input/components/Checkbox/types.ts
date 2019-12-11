import { Props as InputBaseProps } from '../InputBase/types';

export interface Props extends Omit<InputBaseProps, 'after'|'before'|'children'|'cols'|'type'|'as'|'defaultValue'|'placeholder'|'rows'|'value'> {};