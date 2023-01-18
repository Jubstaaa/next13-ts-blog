import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { parseISO, format } from "date-fns";

function SinglePost({ post }: any) {
  return (
    <div key={post._id} className="cursor-pointer group">
      <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md hover:scale-105 aspect-video">
        <Link href={`/post/${post?.slug?.current}`}>
          <Image src={urlFor(post.mainImage).url()} alt={post.title} fill />
        </Link>
      </div>
      <div className="flex gap-3">
        {post?.categories?.length &&
          post?.categories
            ?.slice(0)
            .map((category: { title: String }, index: number) => (
              <Link href="#" key={index}>
                <span className="inline-block mt-5 text-xs font-medium tracking-wider uppercase text-blue-600">
                  {category.title}
                </span>
              </Link>
            ))}
      </div>
      <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary ">
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
      <div className="flex items-center mt-3 space-x-3 text-gray-500 ">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-5 h-5">
            {post?.author?.image && (
              <Image
                src={urlFor(post.author.image).url()}
                fill
                alt={post.author.name}
                className="rounded-full"
              />
            )}
          </div>
          <span className="text-sm">{post.author.name}</span>
        </div>
        <span className="text-xs text-gray-300">&bull;</span>
        <time className="text-sm" dateTime={post._updatedAt}>
          {format(parseISO(post._updatedAt), "MMMM dd, yyyy")}
        </time>
      </div>
    </div>
  );
}

export default SinglePost;
