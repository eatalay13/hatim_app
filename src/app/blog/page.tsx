import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
};

async function BlogPage() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return (
        <div className="mt-40">
            BlogPage
        </div>
    );
}

export default BlogPage;