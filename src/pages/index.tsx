import type { NextPage } from "next";
import Head from "next/head";
import Home from "../templates/home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pagination</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
