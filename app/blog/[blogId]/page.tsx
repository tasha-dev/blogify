// Codes by mahdi tasha
// Forcing nextjs to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Page from "@/component/page";
import Image from "next/image";
import mountainImage from "@/images/img-mountain.jpg";
import Markdown from "react-markdown";
import useArticleId from "@/hook/useArticleId";
import {usePathname} from "next/navigation";
import Loading from "@/component/ui/loading";

// Creating and exporting blog page as default
export default function BlogPage():ReactNode {
    // Getting pathname
    const pathname = usePathname();
    const id = pathname.split('/blog/')[1];

    // Getting data from database
    const data = useArticleId(id);

    // Returning JSX
    return (
        <Page>
            {
                (!data.isLoading)
                    ? (
                        <>
                            <section className={'lg:mb-[100px] mb-[50px]'}>
                                <header>
                                    <div
                                        className={'lg:mb-[30px] mb-[10px] flex items-center justify-start gap-[15px] flex-wrap'}>
                                        <span
                                            className={'text-[12px] md:font-medium font-light dark:text-white text-black'}>
                                            {new Date(data.data.date).toLocaleDateString('us-EN', {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className={'text-[12px] md:font-medium font-light dark:text-white text-black'}>In</span>
                                        <div className={'flex items-center flex-wrap gap-[10px]'}>
                                            {
                                                data.data.tags?.map((item, index) => (
                                                    <span
                                                        className={'text-[12px] md:font-medium font-light dark:text-white text-black'}
                                                        key={index}>#{item}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <h1 className={'lg:mb-[30px] mb-[10px]'}>{data.data.title}</h1>
                                    <p className={'lg:mb-[30px] mb-[10px]'}>{data.data.description}</p>
                                </header>
                                <main>
                                    <Image src={mountainImage.src} alt={'Image of mountain from unsplash'} width={820}
                                           height={500}
                                           className={'rounded-[10px] object-cover w-full lg:h-[500px] md:h-[380px] sm:h-[340px] h-[300px]'}/>
                                </main>
                            </section>
                            <section>
                                <main>
                                    <Markdown className={'markdown'}>
                                        {data.data.body_markdown.replace('<br>', '\n')}
                                    </Markdown>
                                </main>
                            </section>
                        </>
                    ) : (
                        <div className={'flex items-center justify-center'}>
                            <Loading />
                        </div>
                    )
            }
        </Page>
    );
}