import { ReactNode, MouseEvent } from 'react';
export interface Props {
    cancelText?: string;
    children?: ReactNode;
    className?: string;
    closeIcon?: ReactNode;
    color?: 'info' | 'warning' | 'danger' | 'success';
    confirmText?: string;
    customFooter?: ReactNode;
    hasIcon?: boolean;
    hideFooter?: boolean;
    icon?: ReactNode;
    isOpen?: boolean;
    onBackgroundClick?: (event: MouseEvent) => any;
    onConfirm?: (event: MouseEvent) => any;
    onCancel?: (event: MouseEvent) => any;
    title?: ReactNode;
    variant?: 'alert' | 'confirm';
}
