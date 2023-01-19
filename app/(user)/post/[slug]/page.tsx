import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { parseISO, format } from "date-fns";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
      *[_type=="post" && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }
  `;

  const post = await client.fetch(query, { slug });

  return (
    <div>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg !pt-0">
        <div className="max-w-screen-md mx-auto ">
          <div className="text-center">
            <div className="flex gap-3">
              {post?.categories?.length &&
                post?.categories
                  ?.slice(0)
                  ?.map((category: { title: String }, index: number) => (
                    <Link
                      key={index}
                      href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration#"
                    >
                      <span className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600">
                        {category?.title}
                      </span>
                    </Link>
                  ))}
            </div>
          </div>
          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl">
            {post?.title}
          </h1>
          <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-10 h-10">
                <Image
                  src={urlFor(post?.author?.image)?.url()}
                  objectFit="cover"
                  alt={post?.author?.name}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800">{post?.author?.name}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500" dateTime={post?._updatedAt}>
                    {post?._updatedAt &&
                      format(parseISO(post?._updatedAt), "MMMM dd, yyyy")}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        <Image
          src={urlFor(post?.mainImage)?.url()}
          alt={post?.title}
          layout="fill"
          loading="eager"
          objectFit="cover"
        />
      </div>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <article className="max-w-screen-md mx-auto ">
          <div className="mx-auto my-3 prose prose-base prose-a:text-blue-500">
            <PortableText value={post?.body} />
          </div>
        </article>
        <div className="flex justify-center mt-7 mb-7">
          <Link
            className="px-5 py-2 text-sm text-blue-600 rounded-full bg-brand-secondary/20 "
            href="/"
          >
            ← View all posts
          </Link>
        </div>
        <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50">
          <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
            <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
              <Image
                src={urlFor(post?.author?.image)?.url()}
                objectFit="cover"
                alt={post?.author?.name}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <div className="mb-3">
                <h4 className="text-lg font-medium text-gray-800 ">
                  About {post?.author?.name}
                </h4>
              </div>
              <div>
                <PortableText value={post?.author?.bio} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
