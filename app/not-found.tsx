// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from "@/component/page";
import Image from "next/image";
import mountainImage from '@/images/img-mountain.jpg';

// Defining metadata of this page
export const metadata = {title: 'Not Found'}

// Creating and exporting 404 page as default
export default function NotFoundPage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <section className={'lg:mb-[100px] mb-[50px]'}>
                <header>
                    <h1 className={'lg:mb-[30px] mb-[10px] text-center'}>The page you're looking for <br/> Is not found</h1>
                </header>
                <main>
                    <Image src={mountainImage.src} alt={'Image of mountain from unsplash'} width={820} height={500} className={'rounded-[10px] object-cover w-full lg:h-[500px] md:h-[380px] sm:h-[340px] h-[300px]'} />
                </main>
            </section>
        </Page>
    );
}