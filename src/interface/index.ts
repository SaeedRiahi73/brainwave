import type { RefObject } from "react";
import type { PositionType } from "../types";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean,
    isWhite?: boolean,
    withSvg?: boolean,
}

export interface SectionProps {
    className?: string,
    id?: string,
    crosses?: boolean,
    crossesOffSet?: string,
    children?: React.ReactNode
    customPadding?: boolean
}

export interface BackgroundCirclesProps {
    parallaxRef?: RefObject<HTMLDivElement>;
};

export interface GeneratingProps {
    className?: string
}

export interface NotificationProps {
    className: string,
    title: string
}

export interface CompanyLogosProps {
    className: string
}

export interface HeadingProps {
    className?: string,
    title: string,
    text?: string,
    tag?: string
}

export interface ChatBubbleWingProps {
    className?: string,
    pathClassName?: string
}

export interface TaglineProps {
    children: React.ReactNode,
    className?: string
}

export interface BracketsProps {
    position: PositionType;
}