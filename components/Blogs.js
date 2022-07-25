import Image from 'next/image';
import Link from 'next/link';
import blogsStyles from '../styles/Blogs.module.scss';
import BlogCard from './BlogCard';

export default function Blogs({ blogs }) {
    console.log(blogs);

    return (
        <div className={blogsStyles.blogs + ' container'}>
            <div className={blogsStyles.header}>
                <h2 className={blogsStyles.title}>Featured posts</h2>
                <p className={blogsStyles.subtitle}>Checkout our latest blogs.</p>
            </div>
            <div className={blogsStyles.blogCards}>
                {blogs.map((blog) => (
                    <BlogCard blog={blog.attributes} key={blog.id} />
                ))}
            </div>

            <div className={' button ctaPrimary'}>
                <Link href="/blogs">
                    <a>Read more</a>
                </Link>
            </div>
        </div>
    );
}
