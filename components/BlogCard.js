import Image from 'next/image';
import Link from 'next/link';
import cardStyles from '../styles/Blogs.module.scss'

export default function BlogCard({ blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`} passHref>
            <div className={cardStyles.blogCard}>
                <div className={cardStyles.imageWrapper}>
                    <Image className={cardStyles.coverImage} alt='Cover Image' layout='fill' src={`${blog.coverImg.data.attributes.url}`} />
                </div>
                <div className={cardStyles.cardContainer}>
                    <div className={cardStyles.blogTextWrapper}>
                        <p className={cardStyles.blogTitle}>{blog.title}</p>
                        <p className={cardStyles.blogDescription}>{blog.description}</p>
                        <div className={cardStyles.info}>
                            <span>{blog.ttr} min read,</span>
                            <span> Published on:{new Date(blog.publishedAt).toUTCString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
