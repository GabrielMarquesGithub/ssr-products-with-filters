import Banner from "../../components/banner";
import ProductsCardContainer from "../../components/ProductsCardContainer";
import WidthContainer from "../../components/widthContainer";

import styles from "./styles.module.scss";

//mock data
import data from "../../mock/productsPage/category.json";
import FiltersBar from "../../components/filtersBar";

type HomeProps = {
  category?: string;
};

const Home = ({}: HomeProps) => {
  const { products } = data[0];

  return (
    <>
      <Banner />
      <section>
        <WidthContainer>
          <div className={styles.container}>
            <FiltersBar />
            <ProductsCardContainer products={products} columns={3} />
          </div>
        </WidthContainer>
      </section>
    </>
  );
};

export default Home;
