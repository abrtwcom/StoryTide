import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../Hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div className="min-h-screen bg-terminal-bg">
            <Appbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner message="LOADING_BLOG_ENTRY" />
                </div>
            </div>
        </div>
    }

    if (!blog) {
        return <div className="min-h-screen bg-terminal-bg">
            <Appbar />
            <div className="h-screen flex flex-col justify-center items-center font-mono">
                <div className="text-terminal-green terminal-glow text-xl mb-2">BLOG_ENTRY_NOT_FOUND</div>
                <div className="text-terminal-green-dim text-sm">The requested log could not be loaded.</div>
            </div>
        </div>
    }
    return <div className="min-h-screen bg-terminal-bg">
        <FullBlog blog={blog} />
    </div>
}