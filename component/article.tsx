// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {articleType} from "@/type";
import Image from "next/image";
import Link from "next/link";
import mountainImage from '@/images/img-mountain.jpg';

// Creating and exporting article component as default
export default function Article({title, date, tags}:articleType):ReactNode {
    // Returning JSX
    return (
        <li>
            <article>
                <Link href={'#'} className={'flex lg:flex-row flex-col gap-[20px]'}>
                    <div className={'lg:w-[75%] w-full'}>
                        <div className={'flex items-center justify-start flex-wrap gap-[10px] lg:mb-[20px]'}>
                            <span className={'text-[12px] md:font-medium font-light dark:text-white text-black'}>
                                {new Date(date).toLocaleDateString('us-EN', {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <div className={'w-[2px] h-[2px] dark:bg-white bg-black rounded-full'}/>
                            <div className={'flex items-center flex-wrap gap-[10px]'}>
                                {
                                    tags?.map((item, index) => (
                                        <span className={'text-[12px] md:font-medium font-light dark:text-white text-black'} key={index}>{item}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <span className={'font-medium break-words line-clamp-2 dark:text-white text-black md:text-[18px] text-[16px]'}>{title}</span>
                    </div>
                    <Image
                        src={mountainImage.src}
                        alt={title}
                        width={163}
                        height={105}
                        className={'rounded-[10px] object-cover lg:h-full md:h-[380px] sm:h-[340px] h-[300px] lg:w-[25%] w-full'}
                    />
                </Link>
            </article>
        </li>
    );
}