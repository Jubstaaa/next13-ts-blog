import { Post } from "../typings";
import SinglePost from "./SinglePost";

type Props = {
  posts: Post[];
};

function FeaturedBlogList({ posts }: Props) {
  return (
    <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
      {posts.map((post: any) => (
        <SinglePost post={post} />
      ))}
    </div>
  );
}

export default FeaturedBlogList;
