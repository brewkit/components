import { Props as InputBaseProps } from '../InputBase/types';

export interface Props extends Omit<InputBaseProps, 'as'|'after'|'before'|'children'|'cols'|'defaultValue'|'error'|'placeholder'|'rows'|'type'|'value'> {};