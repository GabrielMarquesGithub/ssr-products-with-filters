import { categoriesType } from "../../types/categories";

import FilterItem from "../filterItem";

import styles from "./styles.module.scss";

type FiltersBarType = {
  categories: categoriesType;
};

const FiltersBar = ({ categories }: FiltersBarType) => {
  return (
    <aside className={styles.container}>
      <h3>Lista de Filtros</h3>
      <ul>
        {categories.map((category, index) => (
          <FilterItem key={category + index} category={category} />
        ))}
      </ul>
    </aside>
  );
};

export default FiltersBar;
