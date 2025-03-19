import Link from "next/link";

async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Post not found");
    const post = await res.json();
    return post;
}

// Generate static paths for all posts (1 to 100)
export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function Post({ params }) {
    try {
        const post = await getPost(params.id);
        return (
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-neutral-950">
                    {post.id} {post.title}{" "}
                </h2>
                <p className="text-gray-700">{post.body}</p>
                <Link href="/" title="Back to home" className="text-blue-600 hover:underline mt-4 inline-block">
                    Back to Home
                </Link>
            </div>
        );
    } catch (error) {
        return (
            <div className="text-center p-6">
                <h2 className="text-xl font-semibold text-red-600">Error</h2>
                <p>{error.message}</p>
                <Link href="/" title="Back to home" className="text-blue-600 hover:underline mt-4 inline-block">
                    Back to Home
                </Link>
            </div>
        );
    }
}
