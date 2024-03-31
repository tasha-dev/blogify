// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from "@/component/page";
import Image from "next/image";
import mountainImage from '@/images/img-mountain.jpg';

// Defining metadata of this page
export const metadata = {title: 'About Us'}

// Creating and exporting About us page as default
export default function AboutUsPage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <section className={'lg:mb-[100px] mb-[50px]'}>
                <header className={'lg:mb-[30px] mb-[10px]'}>
                    <h1>About Blogify</h1>
                </header>
                <main>
                    <Image src={mountainImage.src} alt={'Image of mountain from unsplash'} width={820} height={500} className={'rounded-[10px] object-cover w-full lg:h-[500px] md:h-[380px] sm:h-[340px] h-[300px]'} />
                </main>
            </section>
            <section>
                <main>
                    <p className={'mb-[30px]'}>Blogify is a “blog” app designed for simplicity and minimalism. It is particularly suitable for personal blogs. It is designed by nrk9819. The figma design file available to download for free 🤩 under CC BY 4.4</p>
                    <p>It gets its content, and in general its data from dev.to website api</p>
                </main>
            </section>
        </Page>
    );
}