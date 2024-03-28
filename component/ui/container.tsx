// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {containerType} from "@/type";
import cn from '@/lib/cn'

// Creating and exporting container component as default
export default function container({children, size = 'lg', className}:containerType):ReactNode {
    // Returning JSx
    return (
        <div className={cn(
            'mx-auto p-[20px]',
            (size === 'sm')
                ? 'max-w-[620px]'
                : 'max-w-[820px]',
            className
        )}>
            {children}
        </div>
    );
}