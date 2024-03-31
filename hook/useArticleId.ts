// Codes by mahdi tasha
// Importing part
import {useEffect, useState} from "react";
import {blogType} from "@/type";
import axios from "axios";
import {toast} from "sonner";

// Creating and exporting useArticleId custom hook as default
export default function useArticleId(id:string):{ isLoading: boolean, data: blogType } {
    // Defining states of component
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<blogType>({
        date: '',
        title: '',
        body_markdown: '',
        description: '',
        tags: []
    });

    // Using useEffect to fetch article
    useEffect(() => {
        axios.get(`https://dev.to/api/articles/${id}`)
            .then((data) => {
                setLoading(false);

                setData({
                    date: data.data.published_at,
                    title: data.data.title,
                    body_markdown: data.data.body_markdown,
                    description: data.data.description,
                    tags: data.data.tags
                })
            })
            .catch(() => {
                setLoading(false);
                toast.error('A error happened while fetching the data')
            })
    }, []);

    // Returning Data
    return {isLoading: loading, data}
}