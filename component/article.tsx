// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {articleType} from "@/type";
import Image from "next/image";

// Creating and exporting article component as default
export default function Article({title, date, tags, image}:articleType):ReactNode {
    // Returning JSX
    return (
        <li>
            <article>
                <div>
                    <div className={'flex items-center justify-start flex-wrap'}>
                        <span>
                            {new Date(date).toLocaleDateString('us-EN', {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                        <div className={'w-[2px] h-[2px] dark:bg-white bg-black'} />
                        <div className={'flex'}>
                            {
                                tags?.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <h3>{title}</h3>
                </div>
                {image && <Image src={image} alt={title} width={163} height={105} className={'w-[25%] h-full rounded-[10px] object-cover'} /> }
            </article>
        </li>
    );
}