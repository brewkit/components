import React from 'react';
import { Props } from './types';
declare const CompactStatusCard: ({ className, color, header, body, isDisabled, isFilled, ...otherProps }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export default CompactStatusCard;
