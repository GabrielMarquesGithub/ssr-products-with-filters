import { ReactNode } from "react";
import Image from "next/image";

import WidthContainer from "../widthContainer";

import bannerIMG from "../../../public/banner.svg";
import logoIMG from "../../../public/pagination.svg";

import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <header className={styles.container}>
      <WidthContainer>
        <div className={styles.internalContainer}>
          <Image
            src={logoIMG}
            alt="Logo"
            layout="fixed"
            height={80}
            width={80}
          />
          <Image
            src={bannerIMG}
            alt="Banner"
            layout="fixed"
            height={80}
            width={350}
          />
        </div>
      </WidthContainer>
    </header>
  );
};

export default Banner;
