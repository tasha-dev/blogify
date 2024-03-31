// Codes by mahdi tasha
// Forcing nextjs to render this component as client siee component
'use client';

// Importing part
import {ReactNode} from "react";
import {motion} from "framer-motion";
import Link from 'next/link';
import LinkItem from '@/component/ui/header/linkItem';
import Container from '@/component/ui/container';
import ThemeToggler from "@/component/ui/header/themeToggler";
import Drawer from "@/component/drawer/drawer";
import DrawerItem from "@/component/drawer/drawerItem";

// Creating and exporting header component as default
export default function Header():ReactNode {
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
                    <LinkItem href={'/about-us'}>About</LinkItem>
                    <Drawer className={'lg:hidden block'}>
                        <DrawerItem href={'/about-us'}>About</DrawerItem>
                    </Drawer>
                    <ThemeToggler />
                </ul>
            </Container>
        </motion.header>
    );
}