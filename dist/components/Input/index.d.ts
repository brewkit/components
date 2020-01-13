import { ReactElement } from 'react';
import InputIcon from './components/InputIcon';
import { Props } from './types';
declare function Input({ variant, ...otherProps }: Props): ReactElement;
declare namespace Input {
    var Icon: typeof InputIcon;
}
export default Input;
