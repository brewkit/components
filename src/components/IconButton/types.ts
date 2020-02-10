import { Props as ButtonProps } from '@components/Button/types';


export interface Props extends ButtonProps {

    /**
     * The content inside the button to be rendered or the icon to render if `variant="icon"`. Usually just a string,
     * but can be any valid JSX.
     */
    children: string,

    /**
     * An optional label to be displayed within the button
     */
    label?: string,

}
