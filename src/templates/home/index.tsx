import Banner from "../../components/banner";
import ProductsCardContainer from "../../components/ProductsCardContainer";
import WidthContainer from "../../components/widthContainer";
import FiltersBar from "../../components/filtersBar";

import styles from "./styles.module.scss";
import { ProductType } from "../../types/product";

type HomeProps = {
  products: ProductType[];
  categories: string[];
};

const Home = ({ products, categories }: HomeProps) => {
  return (
    <>
      <Banner />
      <section>
        <WidthContainer>
          <div className={styles.container}>
            <h2>Produtos</h2>
            <hr />
            <div className={styles.productsContainer}>
              <FiltersBar categories={categories} />
              <ProductsCardContainer products={products} columns={3} />
            </div>
          </div>
        </WidthContainer>
      </section>
    </>
  );
};

export default Home;
