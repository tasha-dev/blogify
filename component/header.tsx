// Codes by mahdi tasha
// Forcing nextjs to render this component as client siee component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import {motion} from "framer-motion";
import Link from 'next/link';
import LinkItem from '@/component/ui/header/linkItem';
import Container from '@/component/ui/container';
import ThemeToggler from "@/component/ui/header/themeToggler";
import Icon from "@/component/ui/icon";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Defining states of component
    const [opened, setOpened] = useState<boolean>(false);

    // Returning JSX
    return (
        <motion.header
            variants={{
                "hidden": {y: -20, opacity: 0},
                "visible": {y: 0, opacity: 100}
            }}
            initial={'hidden'}
            animate={'visible'}
        >
            <Container className={'flex items-center justify-between gap-[20px]'}>
                <Link className={'truncate block text-[20px] font-medium dark:text-white text-black'} href={'/'}>Blogify</Link>
                <ul className={'shrink-0 flex z-[50] items-center justify-between gap-[20px]'}>
                    <LinkItem className={'lg:w-auto w-full lg:p-0 p-[10px]'} href={'/about-us'}>About</LinkItem>
                    <LinkItem className={'lg:w-auto w-full lg:p-0 p-[10px]'} href={'/blog'}>Blog</LinkItem>
                    <LinkItem className={'lg:w-auto w-full lg:p-0 p-[10px]'} href={'/tags'}>Tags</LinkItem>
                    <ThemeToggler/>
                </ul>
            </Container>
        </motion.header>
    );
}