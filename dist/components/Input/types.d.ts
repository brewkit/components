import { Props as InputProps } from './components/InputBase/types';
export interface Props extends InputProps {
    variant: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select';
}
