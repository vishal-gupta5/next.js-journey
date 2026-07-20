import Link from "next/link";

export default function Blogs() {
    return (
        <div>
            <h1>Blogs</h1>
            <div>
                <div>
                    <h1>Blog Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, in.</p>
                    <Link href={"/blogs/123?type=news"}>Blog 1</Link>
                </div>
                <div>
                    <h1>Blog Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, in.</p>
                    <Link href={"/blogs/123?type=cricket"}>Blog 2</Link>
                </div>
                <div>
                    <h1>Blog Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, in.</p>
                    <Link href={"/blogs/123?type=article"}>Blog 3</Link>
                </div>
                <div>
                    <h1>Blog Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, in.</p>
                    <Link href={"/blogs/123?type=entertainment"}>Blog 4</Link>
                </div>
            </div>
        </div>
    )
}