import Link from "next/link";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts;
}

export default async function Home() {
    const posts = await getPosts();

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="bg-white p-4 rounded shadow">
                        <Link href={`/posts/${post.id}`} title="title" className="text-blue-600 hover:underline">
                            <h3 className="text-lg font-medium">{post.title}</h3>
                        </Link>
                        <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
