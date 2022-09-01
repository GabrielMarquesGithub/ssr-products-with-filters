import { ProductType } from "../../types/product";
import ProductsCard from "../ProductCard";

import styles from "./styles.module.scss";

type ProductsCardContainerType = {
  products: ProductType[];
  columns?: number;
};

//função para estilizar numero de colunas
const gridColumnsStyle = (columns: number) => {
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };
};

const ProductsCardContainer = ({
  products,
  columns = 3,
}: ProductsCardContainerType) => {
  return (
    <div className={styles.container} style={gridColumnsStyle(columns)}>
      {products.map((product, index) => (
        <ProductsCard key={product.id + index} product={product} />
      ))}
    </div>
  );
};

export default ProductsCardContainer;
