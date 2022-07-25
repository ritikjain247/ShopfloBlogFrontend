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

  // const strapiUrl = process.env.STRAPIURL || "http://localhost:1337/api/blogs";
  const res = await axios.get("http://localhost:1337/api/blogs?populate=*");
  const blogs = res.data.data;
  // const meta = res.meta;

  console.log('Res Data:', res.data);
  console.log('Strapi Response:', blogs);

  return {
    props: {
      blogs,
    }
  };
};
