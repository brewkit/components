import { StyledParentComponent } from '../types';

export interface Props extends StyledParentComponent {
    /**
     * The number of pixels wide that the component should be before using mobile styles
     */
    mobileBreakpoint?: number,
};