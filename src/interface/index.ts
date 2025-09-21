export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean,
    isWhite?: boolean,
    withSvg?: boolean,
}

export interface SectionProps {
    className: HTMLDivElement,
    id: string,
    crosses: string,
    crossesOffSet: string,
    children: React.ReactNode

}