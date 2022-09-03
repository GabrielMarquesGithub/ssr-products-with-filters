import Image from "next/image";
import { memo } from "react";

import { ProductType } from "../../types/product";

import { objectIsEqual } from "../../utils/objectIsEqual";

import styles from "./styles.module.scss";

type ProductsCardType = {
  product: ProductType;
};

const ProductsCard = ({ product }: ProductsCardType) => {
  const { image, title, price } = product;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            src={image}
            alt={`Imagem - ${title}`}
            objectFit="contain"
          />
        </div>
        {title}
      </div>
      <div className={styles.footerContainer}>R${price}</div>
    </div>
  );
};

export default memo(ProductsCard, (prev, next) => objectIsEqual(prev, next));
