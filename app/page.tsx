// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from "@/component/page";
import Image from "next/image";
import mountainImage from '@/images/img-mountain.jpg';
import ArticleApiRender from "@/component/articleApiRender";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <section className={'lg:mb-[100px] mb-[50px]'}>
                <header>
                    <h1 className={'lg:mb-[30px] mb-[10px]'}>Blogify - a Minimalist Blog Which Gets Its Data From Dev.to.</h1>
                    <p className={'lg:mb-[30px] mb-[10px]'}>“Blogiy” is a, well themed blog app designed by nrk9819 and its developed by mahdi tasha. This app gets its data from dev.to Database.</p>
                </header>
                <main>
                    <Image src={mountainImage.src} alt={'Image of mountain from unsplash'} width={820} height={500} className={'rounded-[10px] object-cover w-full lg:h-[500px] md:h-[380px] sm:h-[340px] h-[300px]'} />
                </main>
            </section>
            <section>
                <header className={'lg:mb-[30px] mb-[20px]'}>
                    <h6>Recent Publications</h6>
                </header>
                <ArticleApiRender />
            </section>
        </Page>
    );
}