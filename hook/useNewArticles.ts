// Codes by mahdi tasha
// Importing part
import {useEffect, useState} from "react";
import {articleType} from "@/type";
import axios from "axios";
import {toast} from "sonner";

// Creating and exporting useNewArticles custom hook as default
export default function useNewArticles():{ isLoading: boolean, data: articleType[] } {
    // Defining states of component
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<articleType[]>([]);

    // Using useEffect to fetch article
    useEffect(() => {
        axios.get('https://dev.to/api/articles')
            .then((data) => {
                setLoading(false);

                const articles:any[] = data.data;
                const emptyArray:articleType[] = [];

                articles.forEach((item) => {
                    emptyArray.push({
                        date: item.published_at,
                        tags: item.tag_list,
                        title: item.title
                    })
                })

                setData(emptyArray);
            })
            .catch(() => {
                setLoading(false);
                toast.error('A error happened while fetching the data')
            })
    }, []);

    // Returning Data
    return {isLoading: loading, data}
}