import { Props as IconBaseProps } from '../../../Icon/types';

export interface Props extends Omit<IconBaseProps, 'children'> {
    classname?: string,
    variant: string,
}
