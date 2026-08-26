import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { tokenManager } from "../utils/auth";


export interface Blog {
    "content": string;
    "title": string;
    "id": string
    "createdAt": string
    "author": {
        "name": string
    } | undefined
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: tokenManager.getAuthHeader(),
            withCredentials: true
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog:", error);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: tokenManager.getAuthHeader(),
            withCredentials: true
        })
            .then((response) => {
                setBlogs(response.data.blogs || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}