// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining and exporting types
export interface rootLayoutType {children: ReactNode;}
export interface pageType {children: ReactNode;}
export interface containerType {
    children: ReactNode;
    size?: 'lg' | 'sm';
    className?: string;
}