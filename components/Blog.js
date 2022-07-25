/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import blogStyles from '../styles/Blogs.module.scss';

export default function Blog({ blog }) {
    return (
        <div className='container'>
            <Link href={'/'}>
                <a>Home</a>
            </Link >
            <div className={blogStyles.blog}>
                <div className={blogStyles.header}>
                    <h2 className={blogStyles.title}>{blog.title}</h2>
                    <div className={blogStyles.info}>
                        <span>{blog.author} |</span>
                        <span>{new Date(blog.publishedAt).toLocaleString()}, {blog.ttr} mins read</span>
                    </div>
                </div>
                <div className={blogStyles.imageWrapper}>
                    <Image className={blogStyles.coverImage} alt='Cover Image' layout='fill' src={`http://localhost:1337${blog.coverImg.data.attributes.url}`} />
                </div>
                <div className={blogStyles.body}>

                    <ReactMarkdown children={blog.content} />
                </div>
            </div>
        </div>
    )
}
