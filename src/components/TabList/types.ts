import { StyledParentComponent } from '../types';

export interface Props extends StyledParentComponent {
    /**
     * 
     */
    classes?: Object,

    /**
     * The number of pixels that the component should be before using mobile styles
     */
    mobileBreakpoint?: number,
};