import { ReactElement } from 'react';
import InputIcon from './components/InputIcon';
import { Props } from './types';
declare function Input({ variant, ...otherProps }: Props): ReactElement;
declare namespace Input {
    var Checkbox: typeof import("./components/Checkbox").default;
    var Icon: typeof InputIcon;
    var Radio: typeof import("./components/Radio").default;
    var RadioGroup: typeof import("./components/RadioGroup").default;
    var Select: typeof import("./components/Select").default;
    var Switch: typeof import("./components/Switch").default;
    var Textarea: typeof import("./components/Textarea").default;
    var TextInput: typeof import("./components/TextInput").default;
}
export default Input;
