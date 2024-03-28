// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import Icon from "@/component/ui/icon";

// Creating and exporting theme toggler component as default
export default function ThemeToggler():ReactNode {
    // Defining states
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    // Returning JSX
    return (
        <button
            onClick={() => {
                const htmlElement = document.documentElement;

                if (theme == 'dark') {
                    setTheme('light');
                    htmlElement.classList.replace('dark', 'light');
                } else {
                    setTheme('dark');
                    htmlElement.classList.replace('light', 'dark');
                }
            }}
            className={'group relative h-[21px] dark:text-white text-black'}
        >
            <Icon size={14} name={(theme === 'dark') ? 'sun' : 'moon'} />
            <div className={'absolute top-[110%] h-[1px] dark:bg-white bg-black left-0 w-0 transition-all duration-500 group-hover:w-full'}/>
        </button>
    );
}