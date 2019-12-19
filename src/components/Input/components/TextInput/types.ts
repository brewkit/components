import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'as'
    | 'checked'
    | 'children'
    | 'cols'
    | 'customControl'
    | 'defaultChecked'
    | 'inputLabel'
    | 'inputLabelClassName'
    | 'rows'
>;
