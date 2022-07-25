import Link from 'next/link';
import blogsStyles from '../../styles/Blogs.module.scss';
import BlogCard from '../../components/BlogCard';
import axios from 'axios';

export default function blogs({ blogs }) {
    return (
        <div className={blogsStyles.blogs + ' container'}>

            <Link href={'/'}>
                <a>Home</a>
            </Link >
            <div className={blogsStyles.header}>
                <h2 className="sectionTitle">Featured stories</h2>
                <p className={blogsStyles.subtitle + ' sectionSubtitle'}>Checkout our latest blogs</p>
            </div>
            <div className={blogsStyles.blogCards}>
                {blogs.map((blog) => (
                    <BlogCard blog={blog.attributes} key={blog.id} />
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {

    const strapiUrl = process.env.STRAPIURL || "http://localhost:1337/api/blogs?populate=*";
    const res = await axios.get(strapiUrl);
    const blogs = res.data.data;
    // const meta = res.meta;

    return {
        props: {
            blogs,
        }
    };
};
