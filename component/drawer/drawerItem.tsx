// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {drawerItemType} from "@/type";
import Link from "next/link";

// Creating and exporting drawer item component as default
export default function DrawerItem({href, children}:drawerItemType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link
                href={href}
                className={'transition-all duration-500 px-[20px] py-[10px] text-[14px] dark:text-black text-white block bg-transparent dark:hover:bg-black/20 hover:bg-white/20'}
            >
                {children}
            </Link>
        </li>
    );
}