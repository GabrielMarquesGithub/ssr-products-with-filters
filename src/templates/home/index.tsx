import Banner from "../../components/banner";
import ProductsCardContainer from "../../components/ProductsCardContainer";
import WidthContainer from "../../components/widthContainer";

//mock data
import data from "../../mock/productsPage/category.json";

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
          <ProductsCardContainer products={products} columns={4} />
        </WidthContainer>
      </section>
    </>
  );
};

export default Home;
