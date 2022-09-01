import { ReactNode } from "react";
import styles from "./styles.module.scss";

type WidthContainerType = {
  children: ReactNode;
};
const WidthContainer = ({ children }: WidthContainerType) => {
  return <div className={styles.container}>{children}</div>;
};

export default WidthContainer;
