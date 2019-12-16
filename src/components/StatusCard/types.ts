export interface Props {
    className?: string,
    variant: 'standard' | 'compact',
    color: 'info' | 'success' | 'danger',
    header: string,
    icon: string,
    body: string,
    disabled?: boolean,
    fill?: boolean
}
