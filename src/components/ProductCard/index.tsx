import Image from "next/image";
import { ProductType } from "../../types/product";

import styles from "./styles.module.scss";

type ProductsCardType = {
  product: ProductType;
};

const ProductsCard = ({ product }: ProductsCardType) => {
  const { imageUrl, name, price, discount } = product;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            src={imageUrl}
            alt={`Imagem - ${name}`}
            objectFit="contain"
          />
        </div>
        {name}
      </div>
      <div className={styles.footerContainer}>R${price}</div>
    </div>
  );
};

export default ProductsCard;
