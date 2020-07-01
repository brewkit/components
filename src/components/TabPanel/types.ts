import { StyledParentComponent } from '../types';

export interface Props extends StyledParentComponent {
    /**
     * The value of the matching tab component.
     */
    value: any,
}