import { StyledParentComponent } from '@components/types';


export type LabelPlacements = (
    | 'top'
    | 'bottom'
    | 'start'
    | 'end'
);


export interface Props extends StyledParentComponent {

    /**
     * The default `input` element value. Use when the component is not controlled.
     */
    defaultValue?: any,

    /**
     * The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly
     * generated name.
     */
    name?: string,

    /**
     * Value of the selected radio button. The DOM API casts this to a string.
     */
    value?: any,

    /**
     * Callback fired when a radio button is selected.
     */
    onChange?: (event: object) => void,

}
