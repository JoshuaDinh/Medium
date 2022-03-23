import type { NextPage } from "next";
import Head from "next/head";

// Components
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

// Types
import { Post } from "../typings";

// Functions
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
