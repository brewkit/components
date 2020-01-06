export type Variants = 'major' | 'minor' | 'alert';
export type Colors = 'success' | 'danger' | 'warning' | 'info';


export interface Props {
    bannerText: string,
    className?: string,
    color: Colors,
    icon?: string,
    infoText?: string,
    isLoading?: boolean,
    variant: Variants,
}
