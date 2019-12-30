import { Props as InputProps } from './components/InputBase/types';


export interface Props extends InputProps {

    /**
     * The variant of the input you want to display.
     */
    variant: 'text'|'textarea'|'checkbox'|'radio'|'select',

}
