import { Props as InputBaseProps } from '../InputBase/types';

export interface Props extends Omit<InputBaseProps, 'children'|'type'|'as'|'defaultValue'|'fullWidth'|'placeholder'|'value'> {};