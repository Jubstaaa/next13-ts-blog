import BlogList from "../../components/BlogList";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

const query = groq`
  *[_type=="post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function HomePage() {
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}

export default HomePage;
