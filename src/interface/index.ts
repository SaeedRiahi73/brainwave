export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean,
    isWhite?: boolean,
    withSvg?: boolean,
}

export interface SectionProps {
    className: HTMLDivElement,
    id: string,
    crosses: boolean,
    crossesOffSet: string,
    children: React.ReactNode
    customPadding: string
}