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

export interface headerLinkItemType {
    children: string;
    className?: string;
    href: string;
}

export interface iconType {
    size: number;
    name: 'moon' | 'sun' | 'list';
}

export interface drawerType {
    children: ReactNode;
    className?: string;
}

export interface drawerItemType {
    children: string;
    href: string;
}

export interface articleType {
    date: string;
    tags: string[] | undefined;
    title: string;
}