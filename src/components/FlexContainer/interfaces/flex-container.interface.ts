import { ReactNode } from "react";

export interface FlexContainerProps {
    column?: boolean;
    flex?: string;
    center?: string;
    align?: string;
    children?: ReactNode;
}