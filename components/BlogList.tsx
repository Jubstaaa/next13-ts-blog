import { Post } from "../typings";
import FeaturedBlogList from "./FeaturedBlogList";
import SquareBlogList from "./SquareBlogList";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <FeaturedBlogList posts={posts.slice(0, 2)} />
      <SquareBlogList posts={posts} />
    </div>
  );
}

export default BlogList;
