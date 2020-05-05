import { StyledParentComponent } from '../types';

export interface Props extends StyledParentComponent {

    /**
     * If true, the tab will be disabled.
     */
    disabled?: boolean,

    /**
     * The icon element.
     */
    icon?: string,

    /**
     * The label for the tab
     */
    label?: string,

    /**
     * You can provide your own value.  Otherwise, we fall back to the child position index.
     */
    value?: any,

    /**
     * The tab link, if you'd like to link somewhere instead of just showing or hiding elements
     */
    href?: string,
};
