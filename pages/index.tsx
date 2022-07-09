import type { NextPage } from "next";
import Head from "next/head";
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl mx-auto my-7">
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>

      <PostBox />
      <div className="flex"></div>
    </div>
  );
};

export default Home;
