import SinglePost from "./SinglePost";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

function SquareBlogList({ posts }: Props) {
  return (
    <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
      {posts.slice(2).map((post: any) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </div>
  );
}

export default SquareBlogList;
