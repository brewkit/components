import { Props as InputBaseProps } from '../InputBase/types';

export interface Props extends Omit<InputBaseProps, 'as'|'checked'|'children'|'customControl'|'defaultChecked'|'inputLabel'|'inputLabelClassName'|'type'> {};