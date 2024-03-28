// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {rootLayoutType} from "@/type";
import {Inter} from 'next/font/google';
import siteConfig from "@/config/siteConfig";
import cn from "@/lib/cn";
import '@/style/index.css';
import Header from "@/component/header";

// Defining fonts
const InterFont =  Inter({
    weight: ['300', '400', '500', '600', '700'],
    display: 'block',
    subsets: ['latin']
})

// Defining metadata of pages
export const metadata = {
    title: {
        default: 'Home | Blogify',
        template: `%s | Blogify`,
    },
    description: siteConfig.description,
    keywords: ["Blogify", "open-source", "blog application", "DEV.to API", "TypeScript", "React.js", "Next.js", "TailwindCSS", "blog posts", "responsive design", "curated content", "web development", "contributing", "license"],
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#fffff"},
        {media: "(prefers-color-scheme: dark)", color: "#00000"},
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    }
}

// Creating and exporting root layout as default
export default function RootLayout({children}:rootLayoutType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={cn(
                'dark:bg-black bg-white overflow-x-hidden overflow-y-auto min-h-screen',
                    InterFont.className
                )}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}