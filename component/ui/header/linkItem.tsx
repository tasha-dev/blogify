// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {headerLinkItemType} from "@/type";
import Link from "next/link";

// Creating and exporting header link item as default
export default function LinkItem({href, className, children}:headerLinkItemType):ReactNode {
    // Returning JSX
    return (
        <li className={className}>
            <Link href={href} className={'group relative block text-[14px] font-medium dark:text-white text-black'}>
                {children}
                <div className={'absolute top-[110%] h-[1px] dark:bg-white bg-black left-0 w-0 transition-all duration-500 group-hover:w-full'} />
            </Link>
        </li>
    );
}