// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import useNewArticles from "@/hook/useNewArticles";
import Loading from "@/component/ui/loading";
import Article from "@/component/article";

// Creating and exporting article api renderer component as default
export default function ArticleApiRender():ReactNode {
    // Getting articles
    const articles = useNewArticles();

    // Returning JSX
    return (
        <main>
            <ul className={'flex flex-col gap-[20px]'}>
                {
                    (articles.isLoading)
                        ? (
                            <div className={'flex items-center justify-center'}>
                                <Loading />
                            </div>
                        ) : articles.data.slice(0, 4).map((item, index) => (
                            <Article
                                key={index}
                                id={item.id}
                                date={item.date}
                                tags={item.tags}
                                title={item.title}
                            />
                        ))
                }
            </ul>
        </main>
    );
}
