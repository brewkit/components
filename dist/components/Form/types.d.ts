import { ReactNode, ReactElement } from 'react';
export interface Props {
    children?: ReactNode;
}
export interface FormComponent {
    Group?: any;
    Label?: any;
    Field?: any;
    (props: Props): ReactElement;
}
