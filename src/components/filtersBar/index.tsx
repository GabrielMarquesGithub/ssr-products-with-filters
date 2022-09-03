import { categoriesType } from "../../types/categories";

import styles from "./styles.module.scss";

type FiltersBarType = {
  categories: categoriesType;
};

const FiltersBar = ({ categories }: FiltersBarType) => {
  return (
    <aside>
      <ul></ul>
    </aside>
  );
};

export default FiltersBar;
