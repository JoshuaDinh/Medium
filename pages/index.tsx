import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import { Post } from "../typings";
import { sanityClient, urlFor } from "../sanity";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 p-6 lg:grid-cols-3 gap-3 ">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.slug.current}`} key={post._id}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold p-1">{post.title}</p>
                    <p className="text-xs">
                      {post.description} by {post.title}
                    </p>
                  </div>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// ServerSide rendering of POSTS via Sanity.
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id, title, description,author-> {
      name, image
    },description,mainImage,slug
  }`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
