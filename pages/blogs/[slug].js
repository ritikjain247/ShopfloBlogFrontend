import axios from 'axios';
import Blog from '../../components/Blog';

export default function blog({ blog }) {

    return (
        <Blog blog={blog.attributes} />
    );
}

export async function getStaticPaths() {

    const strapiUrl = (process.env.STRAPIURL || "http://localhost:1337") + '/api/blogs?populate=*';
    const res = await axios.get(strapiUrl);
    const blogs = res.data.data;

    const paths = blogs.map((blog) => ({
        params: {
            slug: blog.attributes.slug,
        },
    }));
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    const strapiUrl = (process.env.STRAPIURL || "http://localhost:1337") + '/api/blogs?populate=*';

    const res = await axios.get(`${strapiUrl}&filters\[Slug\][$eq]=${params?.slug}`);
    const blog = res.data.data[0];

    console.log('Blog: ', blog);

    return {
        props: {
            blog,
        },
        revalidate: 60,
    };
}