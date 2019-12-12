import { Props as InputBaseProps } from '../InputBase/types';

export interface Props extends Omit<InputBaseProps, 'as'|'checked'|'children'|'cols'|'customControl'|'defaultChecked'|'inputLabel'|'inputLabelClassName'|'rows'|'type'> {};
