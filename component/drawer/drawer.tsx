// Codes by mahdi tasha
// Forcing nextjs to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import {drawerType} from "@/type";
import Icon from "@/component/ui/icon";

// Creating and exporting drawer component as default
export default function Drawer({className, children}:drawerType):ReactNode {
    // Defining states of component
    const [opened, setOpened] = useState<boolean>(false);

    // Returning JSX
    return (
        <div className={className}>
            <button
                className={'dark:text-white text-black h-[21px] flex items-center justify-center group relative'}
                onClick={() => setOpened(prevState => !prevState)}
            >
                <Icon size={16} name={'list'}/>
                <div className={'absolute top-[110%] h-[1px] dark:bg-white bg-black left-0 w-0 transition-all duration-500 group-hover:w-full'}/>
            </button>
            <div>
                <div
                    data-opened={opened}
                    onClick={() => setOpened(false)}
                    className={'dark:bg-white/10 bg-black/10 backdrop-blur fixed top-0 left-0 w-full h-full z-40 transition-all duration-700 data-[opened="true"]:opacity-100 data-[opened="false"]:opacity-0 data-[opened="true"]:pointer-events-auto data-[opened="false"]:pointer-events-none'}
                />
                <div
                    data-opened={opened}
                    className={'dark:bg-white bg-black fixed top-0 left-0 w-[75%] h-full z-50 overflow-auto py-[20px] transition-all duration-700 data-[opened="false"]:left-[-75%] data-[opened="true"]:left-0 data-[opened="false"]:invisible data-[opened="true"]:visible'}
                >
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    );
}