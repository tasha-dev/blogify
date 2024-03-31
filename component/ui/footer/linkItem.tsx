// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {footerLinkItem} from "@/type";
import Link from 'next/link';
import Icon from "@/component/ui/icon";

// Creating and exporting link item component as defualt
export default function linkItem({className, href, children}:footerLinkItem):ReactNode {
    // Returning JSX
    return (
        <li className={className}>
            <Link className={'flex items-center gap-[20px] justify-between dark:text-white text-black'} href={href}>
                <span className={'text-[14px] font-medium'}>{children}</span>
                <Icon name={'up-right-arrow'} size={10} />
            </Link>
        </li>
    );
}