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
    name: 'moon' | 'sun' | 'list' | 'up-right-arrow';
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
    id: number;
}

export interface footerLinkItem {
    children: string;
    className?: string;
    href: string;
}

export interface blogType {
    date: string;
    title: string;
    tags: string[];
    description: string;
    body_markdown: string;
}