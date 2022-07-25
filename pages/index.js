import axios from 'axios';
import Blogs from '../components/Blogs';

export default function Home({ blogs }) {
  console.log(blogs);
  return (
    <div className='container'>
      <Blogs blogs={blogs.slice(0, 5)} />
    </div>
  )
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
