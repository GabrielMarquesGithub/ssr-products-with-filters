import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { ProductType } from "../types/product";

import { fetchData } from "../utils/fetchData";

import Home from "../templates/home";

type HomePropsPage = {
  products: ProductType[];
  categories: string[];
};

const HomePage: NextPage<HomePropsPage> = (props) => {
  return (
    <>
      <Head>
        <title>Pagination</title>
      </Head>
      <Home {...props} />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const categories = await fetchData(
    "https://fakestoreapi.com/products/categories"
  );
  const products = await fetchData(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/produtos" + req.url
  );

  return {
    props: {
      products,
      categories,
    },
  };
};
