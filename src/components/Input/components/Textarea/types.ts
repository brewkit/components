import { Props as InputBaseProps } from '../InputBase/types';


export type Props = Omit<InputBaseProps,
    'as'
    | 'checked'
    | 'children'
    | 'customControl'
    | 'defaultChecked'
    | 'inputLabel'
    | 'inputLabelClassName'
    | 'type'
>;
