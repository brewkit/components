import { Props as InputBaseProps } from './components/InputBase';

export interface Props extends InputBaseProps {

    /**
     * The variant of the input you want to display.
     */
    variant: 'text'|'textarea'|'checkbox'|'radio',

}
