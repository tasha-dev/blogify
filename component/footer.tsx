// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from '@/component/ui/container';
import Link from "next/link";
import LinkItem from "@/component/ui/footer/linkItem";

// Creating and exporting footer component as default
export default function Footer():ReactNode {
    // Returning JSX
    return (
        <footer>
            <div className={'border-b dark:border-b-white/20 border-b-black/20'}>
                <Container className={'flex lg:flex-row flex-col items-start justify-between gap-[20px] flex-wrap'}>
                    <div>
                        <h6 className={'md:text-[20px] text-[18px] font-medium dark:text-white text-black mb-[20px]'}>Blogify</h6>
                        <p className={'md:text-[18px] text-[14px] font-medium dark:text-white text-black'}>
                            This theme is designed by <Link href={'https://dribbble.com/nrk9819'}>nrk9819</Link>. <br className={'lg:block hidden'}/>
                            Coded by <Link href={'https://tasha.vercel.app/'}>Mahdi Tasha</Link>.
                        </p>
                    </div>
                    <ul className={'flex flex-col gap-[10px] lg:w-auto w-full'}>
                        <LinkItem href={'https://dribbble.com/nrk9819'}>Dribble</LinkItem>
                        <LinkItem href={'https://tasha.vercel.app/'}>Mahdi Tasha</LinkItem>
                        <LinkItem href={'https://www.github.com/tasha-dev'}>Github</LinkItem>
                    </ul>
                </Container>
            </div>
            <Container>
                <span className={'text-[14px] font-normal dark:text-white text-black'}>© {new Date().getFullYear()} nrk9819 & Mahdi Tasha</span>
            </Container>
        </footer>
    );
}