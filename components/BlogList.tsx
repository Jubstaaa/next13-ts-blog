import { Post } from "../typings";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
      {posts.slice(0, 2).map((post) => (
        <div key={post._id} className="cursor-pointer group">
          <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md hover:scale-105 aspect-video">
            <Link href={`/post/${post?.slug?.current}`}>
              <Image
                src={urlFor(post.mainImage).url()}
                width={100}
                height={100}
                alt={post.title}
              />
            </Link>
          </div>
          <div className="flex gap-3">
            {post?.categories?.length &&
              post?.categories?.slice(0).map((category, index) => (
                <Link href="#" key={index}>
                  <span className="inline-block mt-5 text-xs font-medium tracking-wider uppercase text-blue-600">
                    {category.title}
                  </span>
                </Link>
              ))}
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
            <Link href={`/post/${post?.slug?.current}`}>
              <span
                className="bg-gradient-to-r from-green-200 to-green-100
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
              >
                {post.title}
              </span>
            </Link>
          </h2>
          <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-5 h-5">
                {post?.author?.image && (
                  <Image
                    src={urlFor(post.author.image).url()}
                    width={100}
                    height={100}
                    alt={post.author.name}
                    className="rounded-full"
                  />
                )}
              </div>
              <span className="text-sm">{post.author.name}</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
            <time className="text-sm" dateTime={post._createdAt}>
              {/* {format(
                parseISO(post?.publishedAt || post._createdAt),
                "MMMM dd, yyyy"
              )} */}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
